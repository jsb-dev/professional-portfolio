import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '@/assets/content/projectContent';

const styles: Record<string, React.CSSProperties> = {
    carouselCntnr: {
        position: 'relative',
    },

    carousel: {
        display: 'flex',
        overflowX: 'scroll',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatory',
        padding: '1rem 0',
    },
};

const Carousel: React.FC = () => {

    return (
        <div style={styles.carouselCntnr}>
            <div style={styles.carousel}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        img={project.img}
                        description={project.description}
                        projectName={project.projectName}
                        projectLink={project.projectLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
