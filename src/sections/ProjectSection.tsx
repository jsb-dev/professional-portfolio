import React from 'react';
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

    h2: {
        height: 0,
        padding: 0,
        textAlign: 'center',
        letterSpacing: '0.5rem',
        wordSpacing: '0.5rem',
        margin: '4rem 0 2rem 0',
    },
}

const ProjectSection: React.FC = () => {

    return (
        <section style={styles.section}>
            <div style={styles.carouselCntnr}>
                <h2 style={styles.h2}>PROJECTS</h2>
                <Carousel />
            </div>
        </section>
    );
}

export default ProjectSection;