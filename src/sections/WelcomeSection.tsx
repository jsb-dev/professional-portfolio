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
    },

    header: {
        fontSize: '10pt',
        fontWeight: 600,
        textTransform: 'uppercase' as 'uppercase',
    }
}


const WelcomeSection: React.FC = () => {
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
        ...styles.header,
        margin: !viewportIsPortable ? '0 1rem' : '0',
        letterSpacing: viewportIsPortable ? '.4rem' : '0.3rem',
    }

    return (
        <section style={styles.sectionCntnr}>
            <Image src={logoUrl} alt="Logo" style={logoStyle} />
            <div style={headerCntnrStyle}>
                <h2 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'right'
                }}>Efficient</h2>
                <h2 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'left'
                }}>Effective</h2>
                <h2 style={{
                    ...headerStyle,
                    textAlign: !viewportIsPortable ? 'center' : 'right'
                }}>Creative</h2>
            </div>
        </section>
    );
}

export default WelcomeSection;