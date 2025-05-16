import React, { useState, useEffect } from 'react';

const OverlayAd = ({
                       // Customizable props
                       imageUrl = "/api/placeholder/300/250", // Replace with your actual ad image
                       link = "/products",                     // Where clicking the ad should take the user
                       position = "bottom-right",              // Options: bottom-right, bottom-left, center
                       desktopWidth = 300,                     // Width of the ad in pixels on desktop
                       mobileWidth = 200,                      // Width of the ad in pixels on mobile
                       scrollThreshold = 300,                  // Show after scrolling this many pixels
                       showOnce = true,                        // Only show once per session
                       delay = 0                               // Additional delay in ms
                   }) => {
    const [showAd, setShowAd] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Determine position styles based on the position prop
    const getPositionStyles = (isMobileView) => {
        const mobilePositions = {
            'bottom-right': { bottom: '10px', right: '10px' },
            'bottom-left': { bottom: '10px', left: '10px' },
            'center': { bottom: '50%', left: '50%', transform: 'translate(-50%, 50%)' }
        };

        const desktopPositions = {
            'bottom-right': { bottom: '20px', right: '20px' },
            'bottom-left': { bottom: '20px', left: '20px' },
            'center': { bottom: '50%', left: '50%', transform: 'translate(-50%, 50%)' }
        };

        return isMobileView ? mobilePositions[position] : desktopPositions[position];
    };

    useEffect(() => {
        // Check screen size on mount and when window resizes
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkScreenSize();

        // Add event listener for resize
        window.addEventListener('resize', checkScreenSize);

        // Check if we should only show once per session
        if (showOnce) {
            const hasSeenAd = sessionStorage.getItem('hasSeenOverlayAd');
            if (hasSeenAd) {
                return; // Don't show if already seen
            }
        }

        const handleScroll = () => {
            // Show ad when user has scrolled past threshold and hasn't already seen it
            if (window.scrollY > scrollThreshold && !hasShown) {
                setHasShown(true);

                // Add optional delay before showing
                setTimeout(() => {
                    setShowAd(true);

                    // Mark as shown in session storage if showOnce is true
                    if (showOnce) {
                        sessionStorage.setItem('hasSeenOverlayAd', 'true');
                    }
                }, delay);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [hasShown, scrollThreshold, delay, showOnce]);

    const closeAd = () => {
        setShowAd(false);
    };

    if (!showAd) return null;

    const currentWidth = isMobile ? mobileWidth : desktopWidth;
    const positionStyles = getPositionStyles(isMobile);

    return (
        <div
            className="fixed z-50 shadow-lg animate-fade-in-up transition-all duration-300"
            style={{
                ...positionStyles,
                width: `${currentWidth}px`,
            }}
        >
            <div className="relative">
                {/* Close button */}
                <button
                    onClick={closeAd}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 z-10"
                    aria-label="Close advertisement"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Ad content */}
                <a href={link} onClick={() => setShowAd(false)}>
                    <img
                        src={imageUrl}
                        alt="Advertisement"
                        className="w-full h-auto rounded"
                        style={{ display: 'block' }}
                        width={currentWidth}
                        height="auto"
                    />
                </a>
            </div>
        </div>
    );
};

export default OverlayAd;