import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Carousel from '@/components/Carousel';

const styles: Record<string, React.CSSProperties> = {
    section: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        minHeight: '100dvh',
        padding: 0,
        border: 'solid 1px rgba(255, 255, 255, 0.6)',
        boxShadow: '0 0 1rem 0.1rem rgba(255, 255, 255, 0.6)',
    },

    carouselCntnr: {
        width: '100%',
    },

    h1: {
        height: 0,
        textAlign: 'center',
        letterSpacing: '0.5rem',
        wordSpacing: '0.5rem',
        margin: '2rem 0',
    },
}

const PortfolioSection: React.FC = () => {
    const animatedElements = useSelector((state: RootState) => state.ui.animatedElements);
    const projectSctnRef = useRef<HTMLHeadingElement>(null);
    useIntersectionObserver(projectSctnRef, 'projectSctnRef');

    const transitionUp2 = animatedElements['projectSctnRef'] ? 'transition-up-2' : 'blank';

    return (
        <section ref={projectSctnRef} style={styles.section} className={transitionUp2}>
            <div style={styles.carouselCntnr}>
                <h1 ref={projectSctnRef} className={transitionUp2} style={styles.h1}>PORTFOLIO</h1>
                <Carousel />
            </div>
        </section>
    );
};


export default PortfolioSection;