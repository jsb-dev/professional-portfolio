import React from 'react';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {
    sectionCntnr: {
        ...center,
        width: '100%',
        height: '25dvh',
    },

    headerCntnr: {
        ...center,
    },

    header: {
        fontSize: '18pt',
        fontWeight: 600,
    }
}


const WelcomeSection: React.FC = () => {

    return (
        <section style={styles.sectionCntnr}>
            <div style={styles.headerCntnr}>
                <h2 style={styles.header}>ABOUT ME</h2>
            </div>
        </section>
    );
}

export default WelcomeSection;