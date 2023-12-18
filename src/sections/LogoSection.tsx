import React from 'react';
import Image from 'next/image';
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

    h3: {
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
        ...styles.h3,
        margin: !viewportIsPortable ? '0 1rem' : '0',
        letterSpacing: viewportIsPortable ? '0.2rem' : '0.4rem',
        padding: viewportIsPortable ? '0 0 0.8rem 0' : '1rem',
        ...(viewportIsPortable ? { fontSize: '10pt' } : {})
    }

    return (
        <section style={styles.sectionCntnr}>
            <Image src={logoUrl} alt="Logo" style={logoStyle} />
            <div style={headerCntnrStyle}>
                <h3 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'right'
                }}>EFFICIENT</h3>
                <h3 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'left'
                }}>EFFECTIVE</h3>
                <h3 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'right'
                }}>CREATIVE</h3>
            </div>
        </section>
    );
}

export default LogoSection;