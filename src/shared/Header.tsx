import React from 'react';
import Image from 'next/image';
import logoUrl from '@/assets/images/logo.png';
import MenuIcon from '@/assets/icons/MenuIcon';

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: '#ffffff',
        boxShadow: '0 0 2rem 1rem rgba(94, 103, 128, 0.8)',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '2rem 1rem',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImg: {
        width: '80px',
    },
    smallContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1rem',
    },
    smallText: {
        textAlign: 'center',
        letterSpacing: '0.1rem',
        wordSpacing: '0.2rem',
    },
    logoText: {
        fontSize: '1.5rem',
        letterSpacing: '5px',
        margin: '0 2rem',
    },
    menuIconContainer: {
        width: '40px',
    },
    endContainer: {
        display: 'flex',
        alignItems: 'center',
    }
};

interface HeaderProps {
    viewportIsVertical: boolean;
}

const Header: React.FC<HeaderProps> = ({ viewportIsVertical }) => {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.logoContainer}>
                    <Image src={logoUrl} alt="JSB-DEV Logo" style={styles.logoImg} />
                    <div style={styles.smallContainer}>
                        {!viewportIsVertical && (
                            <>
                                <small style={styles.smallText}>Full Stack Developer</small>
                                <small style={styles.smallText}>Multimedia Specialist</small>
                            </>
                        )}

                    </div>
                </div>
                <div style={styles.endContainer}>
                    <div style={styles.menuIconContainer}>
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
