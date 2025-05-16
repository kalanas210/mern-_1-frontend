import React from 'react';

/**
 * Simple Animation wrapper component
 *
 * @param {Object} props
 * @param {string} props.type - Animation type: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out', 'fade'
 * @param {number} props.delay - Delay in milliseconds before animation starts
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Child components to animate
 */
const AnimateSection = ({
                            type = 'fade-up',
                            delay = 0,
                            className = '',
                            children
                        }) => {
    return (
        <div
            className={`scroll-animate animate-${type} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimateSection;