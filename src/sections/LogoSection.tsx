import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import logoUrl from '@/assets/images/logo.png';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {
    sectionCntnr: {
        ...center,
        width: '100%',
        minHeight: 350,
        height: '61dvh',
    },

    headerCntnr: {
        ...center,
    },

    logo: {
        margin: '2rem',
        width: '40%',
        height: 'auto',
    },

    h4: {
        fontWeight: 500,
    },
}


const LogoSection: React.FC = () => {
    const { viewportIsPortable } = useSelector((state: RootState) => state.ui);

    const logoStyle = {
        ...styles.logo,
        width: viewportIsPortable ? '90%' : '40%',
    }

    const headerCntnrStyle = {
        ...styles.headerCntnr,
        flexDirection: viewportIsPortable ? 'column' : 'row' as 'column' | 'row',
    }

    const headerStyle = {
        ...styles.h4,
        margin: !viewportIsPortable ? '0 1rem' : '0',
        letterSpacing: viewportIsPortable ? '0.2rem' : '0.4rem',
        padding: viewportIsPortable ? '0 0 0.8rem 0' : '1rem',
        ...(viewportIsPortable ? { fontSize: '10pt' } : {})
    }

    return (
        <section style={styles.sectionCntnr}>
            <img src={logoUrl.src} alt="The JSB-DEV Logo, written with a cyberpunk-inspired font, in front of a glowing, circular icon." style={logoStyle} />
            <div style={headerCntnrStyle}>
                <h4 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'right'
                }}>EFFICIENT</h4>
                <h4 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'left'
                }}>EFFECTIVE</h4>
                <h4 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'right'
                }}>CREATIVE</h4>
            </div>
            <div id='portfolio-section-anchor' style={{ margin: 0, padding: 0 }} />
        </section>
    );
}

export default LogoSection;