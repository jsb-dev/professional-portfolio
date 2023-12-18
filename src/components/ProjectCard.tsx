import React, { useState } from 'react';
import Image from 'next/image';
import InfoIcon from '@/assets/icons/InfoIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import VisitIcon from '@/assets/icons/visit_icon.svg';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { StaticImageData } from 'next/image';
import { center, btn } from '@/styles/shared';

const backgroundColor = 'rgba(0, 0, 0, 0.55)';

const styledBtn: React.CSSProperties = {
    ...btn,
    position: 'absolute',
    width: 40,
    height: 40,
    margin: '1rem',
}

const styles: Record<string, React.CSSProperties> = {
    cardCntnr: {
        ...center,
        height: 350,
        maxHeight: '65dvh',
        minWidth: '220px',
        maxWidth: '600px',
        width: '500px',
        backgroundColor,
        position: 'relative',
        margin: '0.5rem',
        overflow: 'hidden',
        borderRadius: '.5rem',
        transition: 'box-shadow 0.4s ease-in-out',
        border: '0.1rem solid rgba(255, 255, 255, 0.3)',
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

    iconCntnr: {
        ...center,
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
    },

    img: {
        width: '70%',
        height: 'auto',
        objectFit: 'cover',
        position: 'relative',
    },

    descBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor,
        width: '100%',
        height: '100%',
        padding: '1.5rem 1.5rem 1.5rem 0',
    },

    paragraph: {
        color: 'white',
        padding: '2rem 1.5rem',
        fontSize: '11pt',
    },

    h2: {
        textAlign: 'right',
        position: 'absolute',
        bottom: 0,
        left: '1rem',
        fontSize: '18pt',
        textTransform: 'uppercase',
        letterSpacing: '0.3rem',
        lineHeight: '2.5rem',
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
    const [isHovered, setIsHovered] = useState(false);
    const { viewportIsPortable, viewportIsVertical } = useSelector((state: RootState) => state.ui);

    const toggleView = () => {
        setView(view === 'image' ? 'description' : 'image');
    };

    const onHover = () => {
        setIsHovered(true);
    };

    const onLeave = () => {
        setIsHovered(false);
    };

    const cardCntnrStyle = {
        ...styles.cardCntnr,
        ...(isHovered && view === 'image' ? {
            boxShadow: '0 0 1rem 0.1rem rgba(255, 255, 255, 0.3), inset 0 0 1rem 0.1rem rgba(255, 255, 255, 0.3)',
        } : {}),
    };

    const descCntnrStyle = {
        ...styles.nameCntnr,
        color: view === 'image' ? 'black' : 'transparent'
    }

    const paragraphStyle = {
        ...styles.paragraph,
        textAlign: viewportIsPortable ? 'center' : 'right' as 'center' | 'right',
    }

    return (
        <div
            style={cardCntnrStyle}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >            {view === 'image' && (
            <>
                {((viewportIsPortable && viewportIsVertical) || (!viewportIsPortable)) && (<button
                    style={styles.toggleBtn}
                    onClick={toggleView}
                >
                    <div style={styles.iconCntnr}>
                        <InfoIcon />
                    </div>
                </button>)}
                <Image
                    src={img}
                    alt={projectName}
                    style={styles.img}
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
                        <div style={styles.iconCntnr}>
                            <CloseIcon />
                        </div>
                    </button>
                    <div style={descCntnrStyle}>
                        {!viewportIsPortable && (<h2 style={{
                            ...styles.h2,
                            position: 'relative',
                            textAlign: 'right',
                            width: '90%',
                        }}>{projectName}</h2>)}
                        <p style={paragraphStyle}>{description}</p>
                    </div>
                </div>
            )}
            <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button style={styles.visitBtn}>
                    <div style={{
                        ...styles.iconCntnr,
                        backgroundImage: `url(${VisitIcon.src})`,
                        backgroundSize: '70%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',

                    }}>
                    </div>
                </button>
            </a>
        </div>
    );
};

export default ProjectCard;
