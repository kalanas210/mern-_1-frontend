import React, { useEffect, useRef } from 'react';

// Simplified ScrollAnimation component that's less likely to cause issues
const ScrollAnimation = ({ children, animation = 'fade-up', duration = 800, delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // When element is visible, add the visible class
                    setTimeout(() => {
                        element.classList.add('animate-visible');
                    }, delay);

                    // Once animated, disconnect the observer
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px',
            }
        );

        // Add the initial animation class
        element.classList.add(`animate-${animation}`);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [animation, delay]);

    return (
        <div
            ref={ref}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionProperty: 'opacity, transform',
                transitionTimingFunction: 'ease-out'
            }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;