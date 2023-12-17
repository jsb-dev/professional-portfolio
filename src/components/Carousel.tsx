import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const styles: Record<string, React.CSSProperties> = {
    carouselCntnr: {
        overflowX: 'hidden',
        position: 'relative'
    },

    carousel: {
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory'
    },

    leftBtn: {
        position: 'absolute',
        left: 0,
        zIndex: 1
    },

    rightBtn: {
        position: 'absolute',
        right: 0,
        zIndex: 1
    }
};

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleArrowClick = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return;

        const scrollAmount = carouselRef.current.offsetWidth;;
        const scrollTo = direction === 'left' ? currentIndex - 1 : currentIndex + 1;

        carouselRef.current.scrollTo({
            left: scrollAmount * scrollTo,
            behavior: 'smooth'
        });

        setCurrentIndex(scrollTo);
    };

    return (
        <div style={styles.carouselCntnr}>
            <div
                ref={carouselRef}
                style={styles.carousel}
            >
                {/* Cards go here */}
            </div>
            <button
                onClick={() => handleArrowClick('left')}
                style={styles.leftBtn}
            >
                {'<'}
            </button>
            <button
                onClick={() => handleArrowClick('right')}
                style={styles.rightBtn}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Carousel;
