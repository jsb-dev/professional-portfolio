import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
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


const AboutDivider: React.FC = () => {
    const aboutDivRef = useRef<HTMLHeadingElement>(null);
    useIntersectionObserver(aboutDivRef, 'aboutDivRef');
    const animatedElements = useSelector((state: RootState) => state.ui.animatedElements);

    const fadeIn = animatedElements['aboutDivRef'] ? 'fade-in' : 'blank';

    return (
        <section style={styles.sectionCntnr}>
            <h3 ref={aboutDivRef} className={fadeIn} style={styles.header}>ABOUT MYSELF</h3>
        </section>
    );
}

export default AboutDivider;