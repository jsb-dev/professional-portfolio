import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import logoUrl from '@/assets/images/logo.png';
import MenuIcon from '@/assets/icons/MenuIcon';

const styles: Record<string, React.CSSProperties> = {
    header: {
        position: 'fixed' as 'fixed' | 'absolute' | 'fixed' | 'static' | 'inherit' | 'initial' | 'unset',
        top: 0,
        left: 0,
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        color: '#ffffff',
        border: '0.1rem solid rgba(255, 255, 255, 0.3)',
        boxShadow: 'inset 0 15px 3rem 0.1rem rgba(255, 255, 255, 0.3), inset 0 15px 2rem 1rem rgba(0, 0, 0, 0.9)',
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
        height: 'auto',
    },
    smallContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column' | 'row',
        marginLeft: '1rem',
    },
    smallText: {
        textAlign: 'center' as 'center' | 'left' | 'right' | 'justify' | 'initial' | 'inherit',
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

const Header: React.FC = () => {
    const { viewportIsVertical } = useSelector((state: RootState) => state.ui);


    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.logoContainer}>
                    <Image src={logoUrl} alt="Logo" style={styles.logoImg} />
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
