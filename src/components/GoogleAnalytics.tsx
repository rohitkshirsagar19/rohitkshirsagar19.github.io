import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export const GA_TRACKING_ID = 'G-EWHE4DN6GB';

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('config', GA_TRACKING_ID, {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
};

export default GoogleAnalytics;
