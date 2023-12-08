import React from 'react';
import SkillTopic from '@/components/SkillTopic';
import breakdown from '@/assets/svg/breakdown.svg';
import analytical from '@/assets/svg/analytical.svg';
import html from '@/assets/svg/html.svg';
import laptop from '@/assets/svg/laptop.svg';
import mobile from '@/assets/svg/mobile.svg';
import react from '@/assets/svg/react.svg';

const styles: Record<string, React.CSSProperties> = {
    header: {
        width: '100%',
        textAlign: 'center',
    },
};

interface SkillsSectionProps {
    viewportIsPortable: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ viewportIsPortable }) => {
    return (
        <section>
            <h2 style={styles.header}>What will I bring to your team?</h2>
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
    );
}

export default SkillsSection;