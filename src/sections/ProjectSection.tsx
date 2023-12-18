import React from 'react';
import Carousel from '@/components/Carousel';

const styles: Record<string, React.CSSProperties> = {
    section: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '0.1rem solid rgba(255, 255, 255, 0.3)',
        borderRadius: '.5rem',
        width: '94%',
        padding: 0,
    },

    carouselCntnr: {
        width: '100%',
    },

    h2: {
        height: 0,
        textAlign: 'center',
        letterSpacing: '0.5rem',
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