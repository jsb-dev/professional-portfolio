import React from 'react';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {
    sectionCntnr: {
        ...center,
        width: '100%',
        height: '95dvh',
        margin: 0,
        padding: 0,
    },

    header: {
        fontSize: '18pt',
        fontWeight: 600,
        width: '100%',
        height: 0,
        margin: 0,
        padding: 0,
        textAlign: 'center' as 'center',
    }
}


const WelcomeSection: React.FC = () => {

    return (
        <section style={styles.sectionCntnr}>
            <h3 style={styles.header}>ABOUT MYSELF</h3>
        </section>
    );
}

export default WelcomeSection;