import { useEffect } from 'react';

export const useDocumentMetadata = (title, description) => {
  useEffect(() => {
    document.title = title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', description);
    }
  }, [title, description]);
};
