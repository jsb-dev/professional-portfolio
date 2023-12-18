import React from 'react';
import Carousel from '@/components/Carousel';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {
    carouselCntnr: {
        height: '80dvh',
        width: '90dvw',
    },

    h2: {
    }
}

const ProjectSection: React.FC = () => {

    return (
        <section style={center}>
            <h2 style={styles.h2}>PROJECTS</h2>
            <div style={styles.carouselCntnr}>
                <Carousel />
            </div>
        </section>
    );
}

export default ProjectSection;