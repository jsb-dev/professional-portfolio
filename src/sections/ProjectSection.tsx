import React from 'react';
import Carousel from '@/components/Carousel';

const styles: Record<string, React.CSSProperties> = {
    section: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        boxShadow: '0 0 1rem 0.25rem rgba(94, 103, 128, 0.5), inset 0 0 1rem 0.25rem rgba(94, 103, 128, 0.7)',
        borderRadius: '.5rem',
        width: '98%',
    },

    carouselCntnr: {
        height: '80%',
        width: '100%',
    },

    h2: {
        textAlign: 'center',
        letterSpacing: '0.2rem',
        wordSpacing: '0.5rem',
        margin: '1rem 0 0 0',
        padding: 0,
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