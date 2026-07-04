import { useState, useEffect, useCallback } from 'react';
import { 
  Lock, Unlock, Plus, Trash2, Edit, Image as ImageIcon, CheckCircle2, 
  AlertCircle, Loader2, LogOut, ArrowLeft, Tag, Gift, Percent, 
  UploadCloud, Copy, Sparkles, Calendar, ShieldCheck, X
} from 'lucide-react';

// Import homepage static image assets
import marinePlywood from '../assets/homepage-marineplywood.png';
import veneers from '../assets/veneer2.png';
import laminates from '../assets/laminates.png';
import hardwareFittings from '../assets/hardwarefittings.png';
import doors from '../assets/fancydoors.png';

const getFallbackImage = (id) => {
  switch (id) {
    case 'col1': return marinePlywood;
    case 'col2': return veneers;
    case 'col3': return laminates;
    case 'col4': return hardwareFittings;
    case 'col5': return doors;
    default: return laminates;
  }
};

export const AdminPage = ({ onNavigate }) => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Dashboard content states
  const [activeTab, setActiveTab] = useState('offers'); // 'offers' | 'collections'
  const [offers, setOffers] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loadingOffers, setLoadingOffers] = useState(false);
  const [loadingCollections, setLoadingCollections] = useState(false);
  const [offersEnabled, setOffersEnabled] = useState(true);

  // Form states
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [offerFormMode, setOfferFormMode] = useState('create'); // 'create' | 'edit'
  const [currentOffer, setCurrentOffer] = useState({
    id: '',
    category: 'General',
    badge: 'Limited Time',
    title: '',
    description: '',
    validUntil: '',
    terms: '',
    image: ''
  });

  const [showCollectionForm, setShowCollectionForm] = useState(false);
  const [currentCollection, setCurrentCollection] = useState({
    id: '',
    title: '',
    subtitle: '',
    image: ''
  });

  // Action / Feedback states
  const [notification, setNotification] = useState(null); // { type: 'success'|'error', message: '' }
  const [isSavingOffer, setIsSavingOffer] = useState(false);
  const [isSavingCollection, setIsSavingCollection] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null); // For offers deletion

  // Passcode verification
  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === 'admin123') {
      sessionStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
      showNotification('success', 'Logged in successfully as Administrator.');
    } else {
      setAuthError('Invalid administrator passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    setPasscode('');
    showNotification('success', 'Logged out of admin panel.');
  };

  // Helper for notification messages
  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Fetch offers
  const fetchOffers = useCallback(async () => {
    setLoadingOffers(true);
    try {
      const res = await fetch('/api/offers');
      if (res.ok) {
        const data = await res.json();
        setOffers(data);
      } else {
        showNotification('error', 'Failed to load offers from database.');
      }
    } catch (err) {
      showNotification('error', 'Error connecting to backend database.');
      console.error(err);
    } finally {
      setLoadingOffers(false);
    }
  }, []);



  // Fetch collections (homepage carousel)
  const fetchCollections = useCallback(async () => {
    setLoadingCollections(true);
    try {
      const res = await fetch('/api/collections');
      if (res.ok) {
        const data = await res.json();
        setCollections(data);
      } else {
        showNotification('error', 'Failed to load homepage collections.');
      }
    } catch (err) {
      showNotification('error', 'Error connecting to database.');
      console.error(err);
    } finally {
      setLoadingCollections(false);
    }
  }, []);

  // Fetch offers visibility status
  const fetchOffersStatus = useCallback(async () => {
    try {
      const res = await fetch('/api/offers/status');
      if (res.ok) {
        const data = await res.json();
        setOffersEnabled(data.offersEnabled ?? true);
      }
    } catch (err) {
      console.error('Error fetching offers status:', err);
    }
  }, []);

  // Toggle offers visibility status
  const toggleOffersEnabled = async (newValue) => {
    try {
      const res = await fetch('/api/offers/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offersEnabled: newValue })
      });
      if (res.ok) {
        const data = await res.json();
        setOffersEnabled(data.offersEnabled);
        showNotification('success', `Homepage Offers Section ${data.offersEnabled ? 'enabled' : 'disabled'} successfully.`);
      } else {
        showNotification('error', 'Failed to update offers section status.');
      }
    } catch (err) {
      showNotification('error', 'Failed to connect to backend.');
      console.error(err);
    }
  };

  // Load dashboard data if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        fetchOffers();
        fetchCollections();
        fetchOffersStatus();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, fetchOffers, fetchCollections, fetchOffersStatus]);

  // Handle offer submission (create or edit)
  const handleOfferSubmit = async (e) => {
    e.preventDefault();
    if (!currentOffer.title || !currentOffer.description) {
      showNotification('error', 'Title and Description are required.');
      return;
    }

    setIsSavingOffer(true);
    const method = offerFormMode === 'create' ? 'POST' : 'PUT';
    const url = offerFormMode === 'create' ? '/api/offers' : `/api/offers/${currentOffer.id}`;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentOffer)
      });

      if (res.ok) {
        showNotification('success', `Offer successfully ${offerFormMode === 'create' ? 'created' : 'updated'}!`);
        setShowOfferForm(false);
        fetchOffers();
      } else {
        let errorMessage = 'Failed to save the offer.';
        try {
          const errData = await res.json();
          errorMessage = errData.error || errorMessage;
        } catch (e) {
          errorMessage = `Server error (${res.status}): ${res.statusText || 'Bad Gateway'}`;
        }
        showNotification('error', errorMessage);
      }
    } catch (err) {
      showNotification('error', 'Network error. Failed to save offer.');
      console.error(err);
    } finally {
      setIsSavingOffer(false);
    }
  };

  // Handle offer deletion
  const handleOfferDelete = async (id) => {
    try {
      const res = await fetch(`/api/offers/${id}`, { method: 'DELETE' });
      if (res.ok) {
        showNotification('success', 'Offer successfully deleted!');
        setDeleteConfirmId(null);
        fetchOffers();
      } else {
        showNotification('error', 'Failed to delete offer.');
      }
    } catch (err) {
      showNotification('error', 'Error connecting to server.');
      console.error(err);
    }
  };

  // Handle homepage carousel collection submit (edit only)
  const handleCollectionSubmit = async (e) => {
    e.preventDefault();
    if (!currentCollection.title || !currentCollection.subtitle) {
      showNotification('error', 'Title and Subtitle are required.');
      return;
    }

    setIsSavingCollection(true);
    try {
      const res = await fetch(`/api/collections/${currentCollection.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentCollection)
      });

      if (res.ok) {
        showNotification('success', 'Collection item successfully updated!');
        setShowCollectionForm(false);
        fetchCollections();
      } else {
        let errorMessage = 'Failed to update collection.';
        try {
          const errData = await res.json();
          errorMessage = errData.error || errorMessage;
        } catch (e) {
          errorMessage = `Server error (${res.status}): ${res.statusText || 'Bad Gateway'}`;
        }
        showNotification('error', errorMessage);
      }
    } catch (err) {
      showNotification('error', 'Network error. Failed to save changes.');
      console.error(err);
    } finally {
      setIsSavingCollection(false);
    }
  };

  // Handle image file upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showNotification('error', 'File size exceeds 5MB limit.');
      return;
    }

    // Capture previous image values for rollback on upload failure
    const prevOfferImage = currentOffer.image;
    const prevCollectionImage = currentCollection.image;

    // Create a local object URL to show an instant preview while uploading
    const localUrl = URL.createObjectURL(file);
    if (showOfferForm) {
      setCurrentOffer(prev => ({ ...prev, image: localUrl }));
    }
    if (showCollectionForm) {
      setCurrentCollection(prev => ({ ...prev, image: localUrl }));
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        showNotification('success', 'Image uploaded successfully to Cloudinary.');
        // Replace temporary local URL with the permanent Cloudinary URL
        if (showOfferForm) {
          setCurrentOffer(prev => ({ ...prev, image: data.imageUrl }));
        }
        if (showCollectionForm) {
          setCurrentCollection(prev => ({ ...prev, image: data.imageUrl }));
        }
      } else {
        let errorMessage = 'Failed to upload image.';
        try {
          const errData = await res.json();
          errorMessage = errData.error || errorMessage;
        } catch (e) {
          errorMessage = `Server error (${res.status}): ${res.statusText || 'Bad Gateway'}`;
        }
        showNotification('error', errorMessage);
        // Rollback preview on failure
        if (showOfferForm) {
          setCurrentOffer(prev => ({ ...prev, image: prevOfferImage }));
        }
        if (showCollectionForm) {
          setCurrentCollection(prev => ({ ...prev, image: prevCollectionImage }));
        }
      }
    } catch (err) {
      showNotification('error', 'Network error uploading image.');
      console.error(err);
      // Rollback preview on failure
      if (showOfferForm) {
        setCurrentOffer(prev => ({ ...prev, image: prevOfferImage }));
      }
      if (showCollectionForm) {
        setCurrentCollection(prev => ({ ...prev, image: prevCollectionImage }));
      }
    } finally {
      setIsUploading(false);
    }
  };



  // Copy text to clipboard helper
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showNotification('success', 'Image path copied to clipboard!');
  };

  // Go to website home helper
  const handleExit = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
    }
  };

  // ----------------------------------------------------
  // RENDER: Passcode Gate
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0b3321] via-[#0F5C3B] to-[#C9A44C]/30 flex flex-col justify-center items-center px-4 font-sans text-left">
        <div className="max-w-md w-full bg-slate-900/90 border border-[#C9A44C]/35 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle gold orb glow */}
          <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#C9A44C]/10 blur-2xl pointer-events-none" />
          
          <div className="flex flex-col items-center text-center">
            {/* Elegant shield circle lock icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FAF2DF] to-[#ebd8a1] flex items-center justify-center mb-5 shadow-lg border border-[#C9A44C]">
              <Lock className="w-7 h-7 text-[#0F5C3B]" />
            </div>
            
            <h1 className="text-2xl font-black text-[#FAF2DF] tracking-tight uppercase">
              Pakshal Agencies
            </h1>
            <p className="text-[10px] text-[#C9A44C] tracking-[0.25em] font-black uppercase mb-1">
              ADMIN CONTROL PANEL
            </p>
            <p className="text-stone-400 text-xs font-semibold leading-relaxed mt-2 max-w-[280px]">
              Access restricted to authorized personnel. Please enter your passcode.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="block text-[10px] font-black text-stone-300 uppercase tracking-widest mb-1.5 pl-1">
                Security Passcode
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-slate-950/80 border border-stone-800 text-white rounded-xl py-3 px-4 text-center text-sm font-black focus:outline-none focus:border-[#C9A44C]/70 placeholder-stone-650 transition-colors"
                autoFocus
              />
            </div>

            {authError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold p-3 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleExit}
                className="flex-1 py-3 bg-stone-850 hover:bg-stone-800 border border-stone-800 text-stone-300 font-extrabold text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Return to Site
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-gradient-to-r from-[#ebd8a1] to-[#C9A44C] hover:from-[#FAF2DF] hover:to-[#ebd8a1] text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Unlock Panel
                <Unlock className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-stone-850 pt-4 text-center">
            <span className="text-[9px] font-extrabold text-stone-500 tracking-wider uppercase">
              Secure Key Cryptographic Gate
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // RENDER: Admin Dashboard Dashboard
  // ----------------------------------------------------
  return (
    <div className="h-screen overflow-y-auto no-scrollbar bg-[#FAF8F5] text-slate-800 select-none text-left pt-24 pb-20 font-sans">
      
      {/* Toast Notification */}
      {notification && (
        <div className={`fixed bottom-6 right-6 z-[120] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl border animate-fade-in ${
          notification.type === 'success' 
            ? 'bg-emerald-950 border-emerald-500/30 text-emerald-400' 
            : 'bg-red-950 border-red-500/30 text-red-400'
        }`}>
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-5.5 h-5.5 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-5.5 h-5.5 text-red-400 shrink-0" />
          )}
          <span className="text-xs font-bold leading-relaxed">{notification.message}</span>
        </div>
      )}

      {/* Header Container */}
      <div className="w-full bg-[#FAF8F5] border-b border-[#C9A44C]/25 py-6 px-4 sm:px-6 lg:px-8 text-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#C9A44C] font-bold text-[9px] tracking-[0.3em] uppercase">
              CONTROL PANEL
            </div>
            <h1 className="text-3xl font-black tracking-tight mt-1 flex items-center gap-2.5 text-slate-900">
              <span>Pakshal Agencies</span>
              <span className="bg-[#0F5C3B] text-white text-[10px] py-1 px-2.5 rounded-full font-black uppercase tracking-wider">
                Admin
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleExit}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl text-slate-750 font-extrabold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Exit to Website
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 bg-red-50 hover:bg-red-100 border border-red-200/50 text-red-600 font-extrabold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#F8F6F2] border border-[#C9A44C]/25 rounded-[1.8rem] p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F5C3B]/10 border border-[#0F5C3B]/20 flex items-center justify-center text-[#0F5C3B] shadow-inner shrink-0">
              <Percent className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block">Active Offers</span>
              <span className="text-2xl font-black text-[#0F5C3B] mt-0.5 block">{loadingOffers ? '...' : offers.length}</span>
            </div>
          </div>

          <div className="bg-[#F8F6F2] border border-[#C9A44C]/25 rounded-[1.8rem] p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700 shadow-inner shrink-0">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block">Database Status</span>
              <span className="text-xs font-black text-emerald-750 uppercase mt-1 px-2.5 py-0.5 bg-emerald-500/10 rounded-full inline-block">
                Online & Synced
              </span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="border-b border-stone-200 mb-8 flex justify-between items-end">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('offers')}
              className={`pb-4 px-4 font-black text-[11px] uppercase tracking-widest border-b-2 flex items-center gap-2 cursor-pointer transition-all ${
                activeTab === 'offers' 
                  ? 'border-[#0F5C3B] text-[#0F5C3B]' 
                  : 'border-transparent text-stone-500 hover:text-stone-850'
              }`}
            >
              <Tag className="w-4 h-4" />
              Manage Offers ({offers.length})
            </button>

            <button
              onClick={() => setActiveTab('collections')}
              className={`pb-4 px-4 font-black text-[11px] uppercase tracking-widest border-b-2 flex items-center gap-2 cursor-pointer transition-all ${
                activeTab === 'collections' 
                  ? 'border-[#0F5C3B] text-[#0F5C3B]' 
                  : 'border-transparent text-stone-500 hover:text-stone-850'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Manage Carousel (5)
            </button>
          </div>

          {activeTab === 'offers' && (
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <button
                onClick={() => {
                  setOfferFormMode('create');
                  setCurrentOffer({
                    id: '',
                    category: 'General',
                    badge: 'Limited Time',
                    title: '',
                    description: '',
                    validUntil: '',
                    terms: '',
                    image: ''
                  });
                  setShowOfferForm(true);
                }}
                className="py-2 px-4 bg-[#0F5C3B] hover:bg-[#0a472c] text-white font-extrabold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Create Offer
              </button>

              {/* Offers Visibility Enable/Disable Toggle */}
              <div className="flex items-center gap-3 bg-[#F8F6F2] border border-[#C9A44C]/25 px-4 py-2 rounded-xl shadow-xs">
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-wider">
                  Homepage Offers Section:
                </span>
                <button
                  type="button"
                  onClick={() => toggleOffersEnabled(!offersEnabled)}
                  className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    offersEnabled ? 'bg-[#0F5C3B]' : 'bg-stone-300'
                  }`}
                  aria-label="Toggle Offers Visibility"
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      offersEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className={`text-[10px] font-black uppercase tracking-wider ${offersEnabled ? 'text-[#0F5C3B]' : 'text-stone-500'}`}>
                  {offersEnabled ? 'Active' : 'Disabled'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* TAB CONTENT: Offers Management */}
        {activeTab === 'offers' && (
          <div>
            {loadingOffers ? (
              <div className="w-full py-16 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
                <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Loading offers...</span>
              </div>
            ) : offers.length === 0 ? (
              <div className="bg-[#F8F6F2] border border-[#C9A44C]/20 rounded-[2rem] p-12 text-center max-w-xl mx-auto shadow-sm">
                <Gift className="w-12 h-12 text-[#C9A44C] mx-auto mb-4" />
                <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase">No Offers Configured</h3>
                <p className="text-xs font-bold text-stone-500 leading-relaxed mt-2">
                  There are no promotions in the database. Fallback offers are currently being shown on the homepage. Create an offer to display custom active deals!
                </p>
                <button
                  onClick={() => {
                    setOfferFormMode('create');
                    setCurrentOffer({
                      id: '',
                      category: 'General',
                      badge: 'Limited Time',
                      title: '',
                      description: '',
                      validUntil: '',
                      terms: '',
                      image: ''
                    });
                    setShowOfferForm(true);
                  }}
                  className="mt-6 mx-auto py-2.5 px-5 bg-[#0F5C3B] hover:bg-[#0a472c] text-white font-extrabold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Create First Offer
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                  <div 
                    key={offer.id} 
                    className="bg-[#F8F6F2] border border-[#C9A44C]/20 rounded-[2.2rem] overflow-hidden flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-all duration-300 min-h-[420px]"
                  >
                    {/* Badge and Tag info */}
                    <div className="p-6 pb-2 relative z-10">
                      <div className="flex justify-between items-start gap-2">
                        <span className="px-2.5 py-1 bg-[#0F5C3B]/10 text-[#0F5C3B] rounded-full text-[9px] font-black uppercase tracking-wider border border-[#0F5C3B]/20">
                          {offer.category}
                        </span>
                        <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-750 rounded text-[9px] font-extrabold uppercase tracking-wider border border-yellow-500/20">
                          {offer.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-800 tracking-tight uppercase mt-4 mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-stone-500 font-bold text-xs leading-relaxed line-clamp-3">
                        {offer.description}
                      </p>

                      {offer.validUntil && (
                        <div className="flex items-center gap-1.5 text-[10px] text-stone-400 font-bold mt-4">
                          <Calendar className="w-3.5 h-3.5 text-[#C9A44C]" />
                          <span>Valid Until: <span className="text-stone-600">{offer.validUntil}</span></span>
                        </div>
                      )}
                    </div>

                    {/* Image space */}
                    <div className="h-40 bg-stone-150 border-t border-b border-[#C9A44C]/10 relative overflow-hidden">
                      {offer.image ? (
                        <img 
                          src={offer.image} 
                          className="w-full h-full object-cover" 
                          alt={offer.title}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-stone-200 text-stone-450 gap-1.5 p-4 text-center">
                          <ImageIcon className="w-8 h-8 text-stone-400" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-stone-450">
                            No Custom Card Image
                          </span>
                          <span className="text-[8px] font-bold text-stone-400">
                            (Will use static category fallback background)
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Actions and details footer */}
                    <div className="p-6 pt-3 bg-stone-50 border-t border-stone-100 flex flex-col gap-3">
                      {/* Individual Offer Enable/Disable Toggle */}
                      <div className="flex justify-between items-center bg-white border border-stone-200/60 rounded-xl px-3 py-1.5 shadow-2xs">
                        <span className="text-[9px] font-black text-stone-650 uppercase tracking-wider">
                          Offer Status
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={async () => {
                              try {
                                const newStatus = offer.enabled !== false ? false : true;
                                const res = await fetch(`/api/offers/${offer.id}`, {
                                  method: 'PUT',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ enabled: newStatus })
                                });
                                if (res.ok) {
                                  showNotification('success', `Offer "${offer.title}" ${newStatus ? 'enabled' : 'disabled'} successfully.`);
                                  fetchOffers();
                                } else {
                                  showNotification('error', 'Failed to update offer status.');
                                }
                              } catch {
                                showNotification('error', 'Error connecting to server.');
                              }
                            }}
                            className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                              offer.enabled !== false ? 'bg-[#0F5C3B]' : 'bg-stone-300'
                            }`}
                            aria-label="Toggle Offer Active State"
                          >
                            <span
                              className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                offer.enabled !== false ? 'translate-x-4' : 'translate-x-0'
                              }`}
                            />
                          </button>
                          <span className={`text-[8.5px] font-black uppercase tracking-wider ${offer.enabled !== false ? 'text-[#0F5C3B]' : 'text-stone-500'}`}>
                            {offer.enabled !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                      </div>

                      {offer.terms && (
                        <div className="text-[10px] font-semibold text-stone-400 line-clamp-1 italic">
                          T&C: {offer.terms}
                        </div>
                      )}
                      
                      <div className="flex gap-2.5">
                        <button
                          onClick={() => {
                            setOfferFormMode('edit');
                            setCurrentOffer({ ...offer });
                            setShowOfferForm(true);
                          }}
                          className="flex-1 py-2 bg-white hover:bg-stone-50 border border-stone-250 text-slate-700 font-extrabold text-[9px] uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Edit className="w-3.5 h-3.5 text-slate-500" />
                          Edit
                        </button>
                        
                        {deleteConfirmId === offer.id ? (
                          <div className="flex-1 flex gap-1 animate-pulse">
                            <button
                              onClick={() => handleOfferDelete(offer.id)}
                              className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-[8px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center cursor-pointer"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="flex-1 py-2 bg-stone-200 hover:bg-stone-300 text-slate-700 font-extrabold text-[8px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center cursor-pointer"
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirmId(offer.id)}
                            className="flex-1 py-2 bg-red-50/60 hover:bg-red-50 border border-red-250/30 text-red-600 font-extrabold text-[9px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-red-500" />
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}


        {/* TAB CONTENT: Homepage Carousel (Collections) */}
        {activeTab === 'collections' && (
          <div>
            {loadingCollections ? (
              <div className="w-full py-16 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
                <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Loading collections...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collections.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-[#F8F6F2] border border-[#C9A44C]/25 rounded-[2.2rem] overflow-hidden flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-all duration-300 min-h-[360px]"
                  >
                    <div className="p-6 pb-2 relative z-10">
                      <div className="flex justify-between items-start gap-2">
                        <span className="px-2.5 py-1 bg-[#C9A44C]/15 text-[#7A5C12] rounded-full text-[9px] font-black uppercase tracking-wider border border-[#C9A44C]/30">
                          SLIDE ID: {item.id.toUpperCase()}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-800 tracking-tight uppercase mt-4 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-stone-550 font-bold text-xs leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Image Preview space */}
                    <div className="h-44 bg-stone-150 border-t border-b border-[#C9A44C]/10 relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={item.image || getFallbackImage(item.id)} 
                        className="w-full h-full object-cover" 
                        alt={item.title}
                      />
                      {!item.image && (
                        <div className="absolute top-3 right-3 bg-slate-900/75 backdrop-blur-sm border border-[#C9A44C]/30 px-2 py-0.5 rounded-md text-[8px] font-black text-[#C9A44C] uppercase tracking-wider">
                          Fallback Active
                        </div>
                      )}
                    </div>

                    {/* Edit Actions footer */}
                    <div className="p-6 pt-3 bg-stone-50 border-t border-stone-100 flex flex-col gap-3">
                      <button
                        onClick={() => {
                          setCurrentCollection({ ...item });
                          setShowCollectionForm(true);
                        }}
                        className="w-full py-2 bg-[#0F5C3B] hover:bg-[#0a472c] text-white font-extrabold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Edit className="w-3.5 h-3.5 text-[#C9A44C]" />
                        Edit Slide Content
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* CREATE/EDIT OFFER MODAL FORM */}
      {showOfferForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2.5rem] border border-[#C9A44C]/25 max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-left overflow-y-auto max-h-[90vh] no-scrollbar">
            <button 
              onClick={() => setShowOfferForm(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-600 transition-colors p-1 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="px-2.5 py-1 bg-[#FAF2DF] text-[#7A5C12] rounded-full text-[9px] font-black uppercase tracking-wider border border-[#C9A44C]/30 inline-block">
              {offerFormMode === 'create' ? '✨ NEW OFFER' : '✏️ EDITING'}
            </span>
            
            <h3 className="text-2xl font-black text-[#0F5C3B] tracking-tight uppercase mt-3 mb-1">
              {offerFormMode === 'create' ? 'Create Promotional Offer' : 'Edit Promotional Offer'}
            </h3>
            <p className="text-stone-500 font-bold text-[11px] leading-relaxed mb-6 pb-2">
              Fill in the details to publish a new deal or coupon code directly on the user-facing home screen.
            </p>

            <form onSubmit={handleOfferSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Title */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Offer Title / Heading *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 10% Off or Save More"
                    value={currentOffer.title}
                    onChange={(e) => setCurrentOffer(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                  />
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Product Category
                  </label>
                  <select
                    value={currentOffer.category}
                    onChange={(e) => setCurrentOffer(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                  >
                    <option value="General">General/Storewide</option>
                    <option value="Marine Plywood">Marine Plywood</option>
                    <option value="Laminates">Laminates</option>
                    <option value="Hardware">Hardware / Fittings</option>
                    <option value="Kitchen Accessories">Kitchen Accessories</option>
                  </select>
                </div>

                {/* Badge Label */}
                <div>
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Badge Info (Callout Label)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., COMBO DEAL, LIMITED TIME"
                    value={currentOffer.badge}
                    onChange={(e) => setCurrentOffer(prev => ({ ...prev, badge: e.target.value }))}
                    className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                  />
                </div>

                {/* Description */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Description Text *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Provide short details about this promotion..."
                    value={currentOffer.description}
                    onChange={(e) => setCurrentOffer(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors resize-none"
                  />
                </div>

                {/* Valid Until */}
                <div>
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 2026-07-31 or No Expiry"
                    value={currentOffer.validUntil}
                    onChange={(e) => setCurrentOffer(prev => ({ ...prev, validUntil: e.target.value }))}
                    className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                  />
                </div>

                {/* Terms and conditions */}
                <div>
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Terms & Conditions
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Min order 25 sheets. Valid on BWP."
                    value={currentOffer.terms}
                    onChange={(e) => setCurrentOffer(prev => ({ ...prev, terms: e.target.value }))}
                    className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                  />
                </div>

                {/* Custom Card Background Image Url */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Custom Card Image URL Path
                  </label>
                    <input
                      type="text"
                      placeholder="e.g., /uploads/file-12345.jpg"
                      value={currentOffer.image}
                      onChange={(e) => setCurrentOffer(prev => ({ ...prev, image: e.target.value }))}
                      className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                    />
                </div>

                {/* Upload Section in Modal for Offer */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Or Upload Custom Image directly
                  </label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="file" 
                      id="offer-file-upload" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                    />
                    <label 
                      htmlFor="offer-file-upload"
                      className="py-2.5 px-4 bg-[#0F5C3B]/5 hover:bg-[#0F5C3B]/10 border border-[#0F5C3B]/20 rounded-xl text-[#0F5C3B] font-extrabold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {isUploading ? (
                        <Loader2 className="w-3.5 h-3.5 text-[#0F5C3B] animate-spin" />
                      ) : (
                        <UploadCloud className="w-3.5 h-3.5 text-[#0F5C3B]" />
                      )}
                      {isUploading ? 'Uploading...' : 'Choose Image'}
                    </label>
                    <span className="text-[8.5px] font-bold text-stone-400">
                      Supports JPG, PNG, WEBP. Uploading sets the image path automatically.
                    </span>
                  </div>
                </div>

                {/* Image Preview for Offer */}
                {currentOffer.image && (
                  <div className="sm:col-span-2">
                    <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                      Card Image Preview
                    </label>
                    <div className="h-40 w-full bg-stone-100 rounded-2xl border border-stone-200 overflow-hidden flex items-center justify-center relative shadow-inner">
                      <img
                        src={currentOffer.image}
                        className="w-full h-full object-cover"
                        alt="Offer Card Preview"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://placehold.co/600x400?text=Invalid+Image+URL';
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setCurrentOffer(prev => ({ ...prev, image: '' }))}
                        className="absolute top-2 right-2 bg-red-600 hover:bg-red-750 text-white rounded-lg p-1.5 transition-colors cursor-pointer"
                        title="Remove image"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Enabled Status */}
                <div className="sm:col-span-2 flex items-center gap-3 bg-[#FAF8F5] border border-stone-200/60 p-4 rounded-xl mt-4">
                  <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest pl-0.5">
                    Offer Active Status
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentOffer(prev => ({ ...prev, enabled: prev.enabled !== false ? false : true }))}
                    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      currentOffer.enabled !== false ? 'bg-[#0F5C3B]' : 'bg-stone-300'
                    }`}
                    aria-label="Toggle Offer Active State in Form"
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        currentOffer.enabled !== false ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                  <span className={`text-[10px] font-black uppercase tracking-wider ${currentOffer.enabled !== false ? 'text-[#0F5C3B]' : 'text-stone-500'}`}>
                    {currentOffer.enabled !== false ? 'Show on Homepage' : 'Hidden / Inactive'}
                  </span>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex gap-3 pt-6 mt-6">
                <button
                  type="button"
                  onClick={() => setShowOfferForm(false)}
                  className="flex-1 py-3 bg-stone-105 border border-stone-200 hover:bg-stone-150 text-slate-700 font-extrabold text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingOffer}
                  className="flex-1 py-3 bg-[#0F5C3B] hover:bg-[#0a472c] text-white font-black text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isSavingOffer ? (
                    <>
                      Saving Offer...
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Publish Offer
                      <Sparkles className="w-3.5 h-3.5 text-[#C9A44C]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* EDIT CAROUSEL COLLECTION MODAL FORM */}
      {showCollectionForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2.5rem] border border-[#C9A44C]/25 max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-left overflow-y-auto max-h-[90vh] no-scrollbar">
            <button 
              onClick={() => setShowCollectionForm(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-600 transition-colors p-1 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="px-2.5 py-1 bg-[#FAF2DF] text-[#7A5C12] rounded-full text-[9px] font-black uppercase tracking-wider border border-[#C9A44C]/30 inline-block">
              ✏️ EDITING CAROUSEL SLIDE
            </span>
            
            <h3 className="text-2xl font-black text-[#0F5C3B] tracking-tight uppercase mt-3 mb-1">
              Edit Coverflow Slide
            </h3>
            <p className="text-stone-500 font-bold text-[11px] leading-relaxed mb-6 pb-2">
              Update the text and image for this specific product collection. Uploading a new image will save it securely on Cloudinary.
            </p>

            <form onSubmit={handleCollectionSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Title */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Slide Heading / Collection Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., LAMINATES"
                    value={currentCollection.title}
                    onChange={(e) => setCurrentCollection(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                  />
                </div>

                {/* Subtitle / Desc */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Subtitle / Description Text *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Style That Stands Out"
                    value={currentCollection.subtitle}
                    onChange={(e) => setCurrentCollection(prev => ({ ...prev, subtitle: e.target.value }))}
                    className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                  />
                </div>

                {/* Image URL path */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Slide Background Image URL / Cloudinary Path
                  </label>
                    <input
                      type="text"
                      placeholder="e.g., https://res.cloudinary.com/.../img.jpg"
                      value={currentCollection.image}
                      onChange={(e) => setCurrentCollection(prev => ({ ...prev, image: e.target.value }))}
                      className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-2.5 px-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
                    />
                </div>

                {/* Image Preview in Modal */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Slide Image Preview
                  </label>
                  <div className="h-40 w-full bg-stone-100 rounded-2xl border border-stone-200 overflow-hidden flex items-center justify-center relative shadow-inner">
                    <img
                      src={currentCollection.image || getFallbackImage(currentCollection.id)}
                      className="w-full h-full object-cover"
                      alt="Collection Slide Preview"
                    />
                    {!currentCollection.image && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="bg-slate-900/80 border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-black text-[#C9A44C] uppercase tracking-wider">
                          Using Default Static Fallback
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Upload Section in Modal */}
                <div className="sm:col-span-2">
                  <label className="block text-[9px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
                    Upload New Image directly to Cloudinary
                  </label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="file" 
                      id="modal-file-upload" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                    />
                    <label 
                      htmlFor="modal-file-upload"
                      className="py-2.5 px-4 bg-[#0F5C3B]/5 hover:bg-[#0F5C3B]/10 border border-[#0F5C3B]/20 rounded-xl text-[#0F5C3B] font-extrabold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {isUploading ? (
                        <Loader2 className="w-3.5 h-3.5 text-[#0F5C3B] animate-spin" />
                      ) : (
                        <UploadCloud className="w-3.5 h-3.5 text-[#0F5C3B]" />
                      )}
                      {isUploading ? 'Uploading...' : 'Choose Image'}
                    </label>
                    <span className="text-[8.5px] font-bold text-stone-400">
                      Supports JPG, PNG, WEBP. Upload directly sets background URL.
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex gap-3 pt-6 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCollectionForm(false)}
                  className="flex-1 py-3 bg-stone-105 border border-stone-200 hover:bg-stone-150 text-slate-700 font-extrabold text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingCollection}
                  className="flex-1 py-3 bg-[#0F5C3B] hover:bg-[#0a472c] text-white font-black text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isSavingCollection ? (
                    <>
                      Saving...
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Save Changes
                      <Sparkles className="w-3.5 h-3.5 text-[#C9A44C]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
