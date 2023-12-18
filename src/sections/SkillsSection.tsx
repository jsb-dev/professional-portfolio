import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
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
    padding: '2rem',
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
        padding: '4rem 0 2rem 0'
    },
}

const SkillsSection: React.FC = () => {
    const { viewportIsPortable } = useSelector((state: RootState) => state.ui);

    return (
        <>
            <section style={styles.sectionCntnrBg}>
                <h2 style={styles.h2}>SKILLS</h2>
                <SkillTopic
                    header='An analytical approach'
                    description='A problem without context has no solution. Understanding the scope and nuance of a problem creates the scaffolding for an efficient, effective solution.'
                    svg={analytical}
                    bgColor='transparent'
                    reverse
                    viewportIsPortable={viewportIsPortable}
                />
                <SkillTopic
                    header='Structured problem-solving'
                    description="It's a well-known fact that problem-solving benefits from breaking down larger problems into smaller ones. What's important is knowing how to do so in a way that's meaningful, replicable and scalable."
                    svg={breakdown}
                    bgColor='transparent'
                    viewportIsPortable={viewportIsPortable}
                />
                <SkillTopic
                    header='Fundamental understanding'
                    description='Understanding the fundamental technology behind modern web development frameworks and libraries ensures that I can adapt to the ever-changing landscape of project requirements.'
                    svg={html}
                    bgColor='transparent'
                    reverse
                    viewportIsPortable={viewportIsPortable}
                />
            </section>
            <section style={section}>
                <SkillTopic
                    header='All bases covered'
                    description='My mobile-first approach to development ensures a progressive, responsive experience across all projects. My design and implementation approach ensures consistency, timeliness, and a well-rounded product.'
                    svg={mobile}
                    bgColor='transparent'
                    viewportIsPortable={viewportIsPortable}
                />
                <SkillTopic
                    header='SEO, accessibility, and performance'
                    description='I offer a meticulous, yet timely approach to HTML semantics to lay the groundwork for a well-optimized site. This makes it much easier to implement accessibility features and ensures a performant experience.'
                    svg={laptop}
                    bgColor='transparent'
                    reverse
                    viewportIsPortable={viewportIsPortable}
                />
                <SkillTopic
                    header='Modern practices'
                    description='Being primarily a React developer, I am well-versed in SPA architecture, state management, and the challenges associated with modern web development.'
                    svg={react}
                    bgColor='transparent'
                    viewportIsPortable={viewportIsPortable}
                />
            </section>
        </>
    );
}

export default SkillsSection;