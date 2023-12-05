import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProgressBar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.pathname) {
        setLoading(true);
      }
    };

    const handleComplete = (url) => {
      if (url === router.pathname) {
        setLoading(false);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <div
      style={{
        height: loading ? '4px' : '0',
        width: '100%',
        background: 'blue',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        transition: 'height 0.3s',
      }}
    ></div>
  );
};

export default ProgressBar;
