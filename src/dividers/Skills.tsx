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

    headerCntnr: {
        ...center,
    },

    header: {
        fontSize: '18pt',
        fontWeight: 600,
        height: 0,
        margin: 0,
        padding: 0,
        textAlign: 'center' as 'center',
    }
}


const SkillsDivier: React.FC = () => {
    const skillsDivRef = useRef<HTMLHeadingElement>(null);
    useIntersectionObserver(skillsDivRef, 'skillsDivRef');
    const animatedElements = useSelector((state: RootState) => state.ui.animatedElements);

    const fadeIn = animatedElements['skillsDivRef'] ? 'fade-in' : 'blank';

    return (
        <section style={styles.sectionCntnr}>
            <div style={styles.headerCntnr}>
                <h3 ref={skillsDivRef} className={fadeIn} style={styles.header}>WHAT I&apos;LL BRING TO YOUR TEAM</h3>
            </div>
        </section>
    );
}

export default SkillsDivier;