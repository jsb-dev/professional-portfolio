import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ProjectCard from './ProjectCard';
import { projects } from '@/assets/content/projectContent';

const styles: Record<string, React.CSSProperties> = {
    carouselCntnr: {
        position: 'relative',
        width: '95%',
    },

    carousel: {
        display: 'flex',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatory',
        padding: '2rem 0.5rem',
        margin: 0,
    },
};

const Carousel: React.FC = () => {
    const { viewportIsPortable } = useSelector((state: RootState) => state.ui);

    const cntnrStyle = {
        ...styles.carouselCntnr,
        width: viewportIsPortable ? '95%' : '100%',
    }

    const carouselStyle = {
        ...styles.carousel,
        overflowX: viewportIsPortable ? 'scroll' : 'hidden' as 'scroll' | 'hidden',
    }

    return (
        <div style={cntnrStyle}>
            <div style={carouselStyle}>
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
