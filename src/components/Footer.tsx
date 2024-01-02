import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import openTo from '@/utils/openTo';
import { center } from '@/styles/shared';
import { urls } from '@/assets/content/projectContent';

const styles: Record<string, React.CSSProperties> = {
    footerContainer: {
        ...center,
        margin: 0,
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 0,
        width: '100%',
        minHeight: '25rem',
    },

    gridContainer: {
        display: 'grid',
        gap: '1rem',
        justifyItems: 'center',
        alignItems: 'center',
        width: '100%',
    },

    footerHeading: {
        marginBottom: '1rem',
    },

    gridItem: {
        ...center,
        justifyContent: 'flex-start',
        height: '100%',
    },
};


const SiteFooter: React.FC = () => {
    const { viewportIsPortable, viewportIsVertical } = useSelector((state: RootState) => state.ui);
    const gridSize = (viewportIsPortable || viewportIsVertical) ? 2 : 4;

    return (
        <footer style={styles.footerContainer}>
            <div style={{ ...styles.gridContainer, gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
                <div style={styles.gridItem}>
                    <h6 style={styles.footerHeading}>Designer & Developer</h6>
                    <small>Jacob Booth</small>
                </div>

                <div style={styles.gridItem}>
                    <h6 style={styles.footerHeading}>Other Projects</h6>
                    <a onClick={openTo(urls.diat)}>Diat</a>
                    <a onClick={openTo(urls.applicate)}>Applicate</a>
                    <a onClick={openTo(urls.jsbDevV1)}>V1 Portfolio</a>
                </div>

                <div style={styles.gridItem}>
                    <h6 style={styles.footerHeading}>JSB-DEV Portfolio</h6>
                    <small style={styles.footerParagraph}>2023</small>
                </div>

                <div style={styles.gridItem}>
                    <h6 style={styles.footerHeading}>Connect</h6>
                    <a onClick={openTo(urls.github)}>GitHub</a>
                    <a onClick={openTo(urls.linkedin)}>LinkedIn</a>
                    <a onClick={openTo(urls.email)}>Email</a>
                </div>
            </div>
        </footer>
    );

};

export default SiteFooter;
