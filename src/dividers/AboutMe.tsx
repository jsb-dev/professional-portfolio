import React from 'react';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {
    sectionCntnr: {
        ...center,
        width: '100%',
        height: '25dvh',
        marginBottom: 0,
        paddingBottom: 0,
    },

    header: {
        fontSize: '18pt',
        fontWeight: 600,
        width: '100%',
        textAlign: 'center' as 'center',
    }
}


const WelcomeSection: React.FC = () => {

    return (
        <section style={styles.sectionCntnr}>
            <h2 style={styles.header}>ABOUT ME</h2>
        </section>
    );
}

export default WelcomeSection;