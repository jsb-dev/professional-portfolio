import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import logoUrl from '@/assets/images/logo.png';
import NavMenuBtn from './NavMenuBtn';

const styles: Record<string, React.CSSProperties> = {
    header: {
        position: 'fixed' as 'fixed' | 'absolute' | 'fixed' | 'static' | 'inherit' | 'initial' | 'unset',
        top: 0,
        left: 0,
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        color: '#ffffff',
        boxShadow: 'inset 0 15px 3rem 0.1rem rgba(255, 255, 255, 0.2), inset 0 15px 2rem 1rem rgba(0, 0, 0, 0.9), 0 15px 3rem 0.1rem rgba(255, 255, 255, 0.2)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 70,
        alignItems: 'center',
        width: '100%',
        padding: '0 1rem',
    },
    logoCntnr: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImg: {
        width: '80px',
        height: 'auto',
    },
    smallCntnr: {
        paddingLeft: '2rem',
        display: 'flex',
        flexDirection: 'column' as 'column',
    },
    smallText: {
        textAlign: 'left' as 'left',
        letterSpacing: '0.1rem',
        padding: '0',
        lineHeight: '0.7rem',
    },
    logoText: {
        fontSize: '1.5rem',
        letterSpacing: '5px',
        margin: '0 2rem',
    },
    menuIconContainer: {
        width: '40px',
        marginRight: '0.25rem',
    },
    endContainer: {
        display: 'flex',
        alignItems: 'center',
    }
};

const Header: React.FC = () => {
    const { viewportIsVertical, viewportIsPortable } = useSelector((state: RootState) => state.ui);

    const imgStyle = {
        ...styles.logoImg,
        padding: viewportIsPortable ? 0 : '0 1rem',
    }

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.logoCntnr}>
                    <img src={logoUrl.src} alt="Logo" style={imgStyle} />
                    <div style={styles.smallContainer}>
                        {!viewportIsVertical && (
                            <div style={styles.smallCntnr}>
                                <small style={styles.smallText}>Full Stack Developer</small>
                                <small style={styles.smallText}>React Specialist</small>
                                <small style={styles.smallText}>Multimedia Producer</small>
                            </div>
                        )}

                    </div>
                </div>
                <div style={styles.endContainer}>
                    <div style={styles.menuIconContainer}>
                        <NavMenuBtn />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
