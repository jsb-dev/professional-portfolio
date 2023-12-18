import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { StaticImageData } from 'next/image';
import { center, btn } from '@/styles/shared';

const backgroundColor = 'rgba(0, 0, 0, 0.5)';

const styledBtn: React.CSSProperties = {
    ...btn,
    position: 'absolute',
    width: 50,
    margin: '1rem',
}

const styles: Record<string, React.CSSProperties> = {
    cardCntnr: {
        ...center,
        height: '70dvh',
        minWidth: '220px',
        maxWidth: '600px',
        width: '500px',
        backgroundColor,
        position: 'relative',
        margin: '1rem',
        overflow: 'hidden',
    },

    toggleBtn: {
        ...styledBtn,
        top: 0,
        left: 0,
        zIndex: 1,
    },

    visitBtn: {
        ...styledBtn,
        bottom: 0,
        right: 0,
        zIndex: 1,
    },

    img: {
        width: '80%',
        objectFit: 'cover',
        position: 'relative',
    },

    descBg: {
        ...center,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor,
        width: '100%',
        height: '100%',
        padding: '10rem 1rem',
    },

    descCntnr: {
        width: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },

    paragraph: {
        color: 'white',
        padding: '1rem 1rem',
        fontSize: '11pt',
    },

    h2: {
        textAlign: 'left',
        position: 'absolute',
        bottom: 0,
        left: '1rem',
        fontSize: '18pt',
        zIndex: 1,
        textTransform: 'uppercase',
        letterSpacing: '0.3rem',
        lineHeight: '2.5rem',
        textShadow: '0.3rem 0.3rem 0.1rem black',
    },
}

interface ProjectCardProps {
    img: StaticImageData;
    description: string;
    projectName: string;
    projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, description, projectName, projectLink }) => {
    const [view, setView] = useState<'image' | 'description'>('image');
    const { viewportIsPortable, viewportIsVertical } = useSelector((state: RootState) => state.ui);

    const toggleView = () => {
        setView(view === 'image' ? 'description' : 'image');
    };

    const imgStyle = {
        ...styles.img,
        display: 'block',
        zIndex: 0,
    }

    const descCntnrStyle = {
        ...styles.nameCntnr,
        color: view === 'image' ? 'black' : 'transparent'
    }

    return (
        <div style={styles.cardCntnr}>
            {view === 'image' && (
                <>
                    {((viewportIsPortable && viewportIsVertical) || (!viewportIsPortable)) && (<button
                        style={styles.toggleBtn}
                        onClick={toggleView}
                    >
                        Tgl
                    </button>)}
                    <Image
                        src={img}
                        alt={projectName}
                        style={imgStyle}
                    />
                    {(!viewportIsPortable && !viewportIsVertical) && (<h2 style={styles.h2}>{projectName}</h2>)}
                </>
            )}
            {view === 'description' && (
                <div style={styles.descBg}>
                    <button
                        style={styles.toggleBtn}
                        onClick={toggleView}
                    >
                        Tgl
                    </button>
                    <div style={descCntnrStyle}>
                        {!viewportIsPortable && (<h2>{projectName}</h2>)}
                        <p style={styles.paragraph}>{description}</p>
                    </div>
                </div>
            )}
            <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button style={styles.visitBtn}>Vst</button>
            </a>
        </div>
    );
};

export default ProjectCard;
