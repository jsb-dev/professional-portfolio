import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Carousel from '@/components/Carousel';

const styles: Record<string, React.CSSProperties> = {
    section: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        height: '100dvh',
        padding: 0,
        border: 'solid 1px rgba(255, 255, 255, 0.2)',
    },

    carouselCntnr: {
        width: '100%',
    },

    h1: {
        height: 0,
        padding: '0 1rem 1rem 1rem',
        textAlign: 'center',
        letterSpacing: '0.5rem',
        wordSpacing: '0.5rem',
        margin: '4rem 0 2rem 0',
    },
}

const ProjectSection: React.FC = () => {
    const projectSctnRef = useRef<HTMLHeadingElement>(null);
    useIntersectionObserver(projectSctnRef, 'projectSctnRef');
    const animatedElements = useSelector((state: RootState) => state.ui.animatedElements);

    const transitionUp = animatedElements['projectSctnRef'] ? 'transition-up' : '';

    return (
        <section ref={projectSctnRef} style={styles.section} className={transitionUp}>
            <div style={styles.carouselCntnr}>
                <h1 ref={projectSctnRef} className={transitionUp} style={styles.h1}>PORTFOLIO</h1>
                <Carousel />
            </div>
        </section>
    );
};


export default ProjectSection;