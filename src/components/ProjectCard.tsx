import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { StaticImageData } from 'next/image';
import { center, btn } from '@/styles/shared';
import openTo from '@/utils/openTo';
import InfoIcon from '@/assets/icons/InfoIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import VisitIcon from '../../public/assets/icons/visit_icon.svg';
import PlayIcon from '../../public/assets/icons/play_icon.svg';

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
        bottom: '1rem',
        right: 0,
        zIndex: 1,
    },

    playBtn: {
        ...styledBtn,
        bottom: '1rem',
        right: '3.5rem',
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
        lineHeight: '1rem',
    },

    modal: {
        ...center,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1000,
        padding: 0,
    },

    modalContent: {
        ...center,
        borderRadius: '0.5rem',
        overflow: 'hidden',
        width: '80%',
        padding: 0,
    },

    closeModalBtn: {
        ...btn,
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        border: 'none',
        padding: 0,
        margin: 0,
        width: 50,
        backgroundColor: 'transparent',
        cursor: 'pointer',
    }

}

interface ProjectCardProps {
    img: StaticImageData;
    description: string;
    projectName: string;
    projectLink: string;
    videoId: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, description, projectName, projectLink, videoId }) => {
    const [view, setView] = useState<'image' | 'description'>('image');
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { viewportIsPortable, viewportIsVertical } = useSelector((state: RootState) => state.ui);

    const toggleView = () => {
        setView(view === 'image' ? 'description' : 'image');
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
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
            boxShadow: '0 0 1rem 0.1rem rgba(255, 255, 255, 0.2), inset 0 0 1rem 0.1rem rgba(255, 255, 255, 0.2)',
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

    const modalContentStyle = {
        ...styles.modalContent,
        height: viewportIsVertical && viewportIsPortable ? 'auto' : '80%',
    }

    return (
        <div
            style={cardCntnrStyle}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >            {view === 'image' && (
            <>
                {((viewportIsPortable && viewportIsVertical) || (!viewportIsPortable)) && (


                    <button
                        style={styles.toggleBtn}
                        onClick={toggleView}
                    >
                        <div style={styles.iconCntnr}>
                            <InfoIcon />
                        </div>
                    </button>
                )}
                <img
                    src={img.src}
                    alt={projectName}
                    style={styles.img}
                />
                {(!viewportIsPortable && !viewportIsVertical) && (<h3 style={styles.h2}>{projectName}</h3>)}
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
                        {!viewportIsPortable && (<h3 style={{
                            ...styles.h2,
                            position: 'relative',
                            textAlign: 'right',
                            width: '90%',
                        }}>{projectName}</h3>)}
                        <p style={paragraphStyle}>{description}</p>
                    </div>
                </div>
            )}
            <button onClick={toggleModal} style={styles.playBtn}>
                <div style={{
                    ...styles.iconCntnr,
                    backgroundImage: `url(${PlayIcon.src})`,
                    backgroundSize: '70%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',

                }}>
                </div>
            </button>
            <a onClick={openTo(projectLink)}
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
            {isModalOpen && (
                <div style={styles.modal}>
                    <div style={modalContentStyle}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button onClick={toggleModal} style={styles.closeModalBtn}>
                            <CloseIcon color={true} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
