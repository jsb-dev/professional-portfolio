import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import SkillTopic from '@/components/SkillTopic';
import { center } from '@/styles/shared';
import breakdown from '@/assets/svg/breakdown.svg';
import analytical from '@/assets/svg/analytical.svg';
import html from '@/assets/svg/html.svg';
import laptop from '@/assets/svg/laptop.svg';
import mobile from '@/assets/svg/mobile.svg';
import react from '@/assets/svg/react.svg';

const section = {
    ...center,
    width: '100%',
    padding: '4rem 0',
};

const styles: Record<string, React.CSSProperties> = {
    sectionCntnrBg: {
        ...section,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: 'solid 1px rgba(255, 255, 255, 0.2)',
    },

    h2: {
        textAlign: 'left' as 'left',
        width: '80%',
        padding: '2rem 0'
    },

    topicContainer: {
        ...center,
        width: '100%',
        padding: 0,
    }
}

const SkillsSection: React.FC = () => {
    const { viewportIsPortable } = useSelector((state: RootState) => state.ui);
    const animatedElements = useSelector((state: RootState) => state.ui.animatedElements);

    const ssCntnr1Ref = useRef<HTMLDivElement>(null);
    const ssCntnr2Ref = useRef<HTMLDivElement>(null);
    const ssRef1 = useRef<HTMLDivElement>(null);
    const ssRef2 = useRef<HTMLDivElement>(null);
    const ssRef3 = useRef<HTMLDivElement>(null);
    const ssRef4 = useRef<HTMLDivElement>(null);
    const ssRef5 = useRef<HTMLDivElement>(null);
    const ssRef6 = useRef<HTMLDivElement>(null);

    useIntersectionObserver(ssCntnr1Ref, 'ssCntnr1Ref');
    useIntersectionObserver(ssCntnr2Ref, 'ssCntnr2Ref');
    useIntersectionObserver(ssRef1, 'ssRef1');
    useIntersectionObserver(ssRef2, 'ssRef2');
    useIntersectionObserver(ssRef3, 'ssRef3');
    useIntersectionObserver(ssRef4, 'ssRef4');
    useIntersectionObserver(ssRef5, 'ssRef5');
    useIntersectionObserver(ssRef6, 'ssRef6');

    const fadeIn1 = animatedElements['ssCntnr1Ref'] ? 'fade-in' : 'blank';
    const fadeIn2 = animatedElements['ssCntnr2Ref'] ? 'fade-in' : 'blank';
    const transitionUp1 = animatedElements['ssRef1'] ? 'transition-right' : '';
    const transitionUp2 = animatedElements['ssRef2'] ? 'transition-left' : '';
    const transitionUp3 = animatedElements['ssRef3'] ? 'transition-right' : '';
    const transitionUp4 = animatedElements['ssRef4'] ? 'transition-left' : '';
    const transitionUp5 = animatedElements['ssRef5'] ? 'transition-right' : '';
    const transitionUp6 = animatedElements['ssRef6'] ? 'transition-left' : '';

    return (
        <>
            <section ref={ssCntnr1Ref} className={fadeIn1} style={styles.sectionCntnrBg}>
                <h2 style={styles.h2}>SKILLS</h2>
                <div ref={ssRef1} className={transitionUp1} style={styles.topicContainer}>
                    <SkillTopic
                        header='An analytical approach'
                        description='A problem without context has no solution. Understanding the scope and nuance of a problem creates the scaffolding for an efficient, effective solution.'
                        svg={analytical}
                        bgColor='transparent'
                        reverse
                        viewportIsPortable={viewportIsPortable}
                    />
                </div>
                <div ref={ssRef2} className={transitionUp2} style={styles.topicContainer}>

                    <SkillTopic
                        header='Structured problem-solving'
                        description="It's a well-known fact that problem-solving benefits from breaking down larger problems into smaller ones. What's important is knowing how to do so in a way that's meaningful, replicable and scalable."
                        svg={breakdown}
                        bgColor='transparent'
                        viewportIsPortable={viewportIsPortable}
                    />
                </div>
                <div ref={ssRef3} className={transitionUp3} style={styles.topicContainer}>

                    <SkillTopic
                        header='Fundamental understanding'
                        description='Understanding the fundamental technology behind modern web development frameworks and libraries ensures that I can adapt to the ever-changing landscape of project requirements.'
                        svg={html}
                        bgColor='transparent'
                        reverse
                        viewportIsPortable={viewportIsPortable}
                    />
                </div>
            </section>
            <section ref={ssCntnr2Ref} className={fadeIn2} style={section}>
                <div ref={ssRef4} className={transitionUp4} style={styles.topicContainer}>

                    <SkillTopic
                        header='All bases covered'
                        description='My mobile-first approach to development ensures a progressive, responsive experience across all projects. My design and implementation approach ensures consistency, timeliness, and a well-rounded product.'
                        svg={mobile}
                        bgColor='transparent'
                        viewportIsPortable={viewportIsPortable}
                    />
                </div>
                <div ref={ssRef5} className={transitionUp5} style={styles.topicContainer}>

                    <SkillTopic
                        header='SEO, accessibility, and performance'
                        description='I offer a meticulous, yet timely approach to HTML semantics to lay the groundwork for a well-optimized site. This makes it much easier to implement accessibility features and ensures a performant experience.'
                        svg={laptop}
                        bgColor='transparent'
                        reverse
                        viewportIsPortable={viewportIsPortable}
                    />
                </div>
                <div ref={ssRef6} className={transitionUp6} style={styles.topicContainer}>

                    <SkillTopic
                        header='Modern practices'
                        description='Being primarily a React developer, I am well-versed in SPA architecture, state management, and the challenges associated with modern web development.'
                        svg={react}
                        bgColor='transparent'
                        viewportIsPortable={viewportIsPortable}
                    />
                </div>
            </section>
        </>
    );
}

export default SkillsSection;