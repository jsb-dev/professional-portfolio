import React from 'react';
import ProjectCard from '@/components/ProfileCard';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {

}

interface ProjectSectionProps {
    viewportIsPortable: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ viewportIsPortable }) => {

    return (
        <section style={center}>
        </section>
    );
}

export default ProjectSection;