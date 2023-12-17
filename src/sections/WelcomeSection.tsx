import React from 'react';
import Image from 'next/image';
import logoUrl from '@/assets/images/logo.png';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {
    sectionCntnr: {
        ...center,
        width: '100%',
        minHeight: 350,
    },
    headerCntnr: {
        ...center,
    },
    logo: {
        margin: '2rem',
    },
    header: {
        margin: '.5rem 5rem',
        fontSize: '14pt',
        textAlign: 'center' as 'center',
        letterSpacing: '0.3rem',
    }
}

interface WelcomeSectionProps {
    viewportIsPortable: boolean;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ viewportIsPortable }) => {

    const sectionCntnrStyle = {
        ...styles.sectionCntnr,
        height: viewportIsPortable ? '60dvh' : '65dvh',
    }

    const logoStyle = {
        ...styles.logo,
        width: viewportIsPortable ? '100%' : '40%',
    }

    const headerCntnrStyle = {
        ...styles.headerCntnr,
        flexDirection: viewportIsPortable ? 'column' : 'row' as 'column' | 'row',
    }

    return (
        <section style={sectionCntnrStyle}>
            <Image src={logoUrl} alt="Logo" style={logoStyle} />
            <div style={headerCntnrStyle}>
                <h2 style={styles.header}>Efficient</h2>
                <h2 style={styles.header}>Effective</h2>
                <h2 style={styles.header}>Creative</h2>
            </div>
        </section>
    );
}

export default WelcomeSection;