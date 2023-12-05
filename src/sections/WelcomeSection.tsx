import React from 'react';
import Image from 'next/image';
import logoUrl from '@/assets/images/logo.png';

const styles = {
    container: {
        width: '99dvw',
        height: 'max(90dvh, 400px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logo: {
        width: 'min(80%, 600px)',
        margin: '2rem',
    },
    header: {
        margin: '2rem',
    }
}

interface WelcomeSectionProps {
    viewportIsVertical: boolean;
    viewportIsPortable: boolean;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ viewportIsPortable, viewportIsVertical }) => {
    return (
        <section style={styles.container}>
            <Image src={logoUrl} alt="Logo" style={styles.logo} />
            <h1 style={styles.header}>Welcome</h1>
        </section>
    );
}

export default WelcomeSection;