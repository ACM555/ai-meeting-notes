import { useEffect, useState } from 'react';

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      ...options,
    });

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return [setRef, isInView];
};

export default useInView;
