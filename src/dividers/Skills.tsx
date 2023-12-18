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
        padding: '0 1rem',
        textAlign: 'center' as 'center',
    }
}


const WelcomeSection: React.FC = () => {

    return (
        <section style={styles.sectionCntnr}>
            <div style={styles.headerCntnr}>
                <h2 style={styles.header}>WHAT I&apos;LL BRING TO YOUR TEAM</h2>
            </div>
        </section>
    );
}

export default WelcomeSection;