import React, { useState } from 'react';
import Image from 'next/image';

const styles: Record<string, React.CSSProperties> = {
    cardCntnr: {
        height: '80vh',
        width: '400px',
        maxWidth: '90vw',
    },

    toggleBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2
    },

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    descBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
    },

    paragraph: {
        color: 'white',
        padding: '1rem'
    },

    nameCntnr: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 2,
    },

    anchor: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 2
    }
}

interface ProjectCardProps {
    img: string;
    description: string;
    projectName: string;
    projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, description, projectName, projectLink }) => {
    const [view, setView] = useState<'image' | 'description'>('image');

    const toggleView = () => {
        setView(view === 'image' ? 'description' : 'image');
    };

    const imgStyle = {
        ...styles.img,
        display: view === 'image' ? 'block' : 'none'
    }

    const nameCntnrStyle = {
        ...styles.nameCntnr,
        color: view === 'image' ? 'black' : 'transparent'
    }

    return (
        <div style={styles.cardCntnr}>
            <button
                style={styles.toggleBtn}
                onClick={toggleView}
            >
                Toggle View
            </button>
            <Image
                src={img}
                alt={projectName}
                style={imgStyle}
            />
            {view === 'description' && (
                <div style={styles.descBg}>
                    <p style={styles.paragraph}>{description}</p>
                </div>
            )}
            <div style={nameCntnrStyle}>
                {projectName}
            </div>
            <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.anchor}
            >
                <button>Visit</button>
            </a>
        </div>
    );
};

export default ProjectCard;
