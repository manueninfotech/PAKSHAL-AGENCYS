import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './Admin/AdminPage';
import { LoginForm } from './Admin/LoginForm';


const getNormalizedPage = (pathname, search = '') => {
  // Check query parameter routing first (perfect for static hosts like GitHub Pages!)
  const params = new URLSearchParams(search);
  const pageParam = params.get('page');
  if (pageParam) {
    if (['home', 'about', 'gallery', 'products', 'contact', 'admin', 'login'].includes(pageParam)) {
      return pageParam;
    }
  }

  const cleanPath = pathname.startsWith('/PAKSHAL-AGENCYS')
    ? pathname.slice('/PAKSHAL-AGENCYS'.length)
    : pathname;

  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/gallery') return 'gallery';
  if (cleanPath === '/products') return 'products';
  if (cleanPath === '/contact') return 'contact';
  if (cleanPath === '/admin') return 'admin';
  if (cleanPath === '/login') return 'login';
  return 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return getNormalizedPage(window.location.pathname, window.location.search);
  });
  const [currentSearch, setCurrentSearch] = useState(() => window.location.search);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentSearch(window.location.search);
      setCurrentPage(getNormalizedPage(window.location.pathname, window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize admin auth state on navigation changes
  useEffect(() => {
    setIsAdminAuthenticated(sessionStorage.getItem('admin_auth') === 'true');
  }, [currentPage]);

  const handleNavigate = (page, hash = '', search = '') => {
    setCurrentPage(page);
    setCurrentSearch(search);

    const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
    let newPath;

    // Use query parameters for admin and login routes to completely avoid static host 404s on reload
    if (page === 'admin' || page === 'login') {
      newPath = `${basePrefix}/?page=${page}`;
    } else {
      const pathMap = { 
        about: '/about', 
        gallery: '/gallery', 
        products: '/products', 
        contact: '/contact'
      };
      const cleanPath = pathMap[page] || '/';
      newPath = basePrefix + cleanPath + search;
    }

    if (window.location.pathname + window.location.search !== newPath) {
      window.history.pushState({}, '', newPath);
    }

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} isAdminAuthenticated={isAdminAuthenticated} />

      {currentPage === 'home' && (
        <HomePage onNavigateAbout={() => handleNavigate('about')} onNavigate={handleNavigate} />
      )}

      {currentPage === 'about' && (
        <AboutPage onNavigateHome={(hash) => handleNavigate('home', hash)} />
      )}

      {currentPage === 'gallery' && (
        <GalleryPage />
      )}

      {currentPage === 'products' && (
        <ProductsPage onNavigate={handleNavigate} search={currentSearch} />
      )}

      {currentPage === 'contact' && (
        <ContactPage />
      )}

      {currentPage === 'admin' && (
        <AdminPage onNavigate={handleNavigate} />
      )}

      {currentPage === 'login' && (
        <LoginForm onNavigate={handleNavigate} />
      )}

      <Footer onNavigate={(hash, page) => handleNavigate(page || 'home', hash)} />
      {currentPage !== 'products' && <WhatsAppButton />}
    </div>
  );
}

export default App;
