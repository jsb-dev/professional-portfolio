import React, { useEffect } from 'react';
import { updateLayout } from '@/redux/slices/uiSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { center } from '@/styles/shared';
import Header from '@/components/Header';
import WelcomeSection from '@/sections/WelcomeSection';
import ProfileSection from '@/sections/ProfileSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectSection from '@/sections/ProjectSection';
import AboutMe from '@/dividers/AboutMe';
import Skills from '@/dividers/Skills';
import bgImg from '@/assets/images/bg-img.jpg';

const styles: Record<string, React.CSSProperties> = {
    container: {
        overflow: 'hidden',
    },
    sectionCntnr: {
        ...center,
    },
    bgImg: {
        position: 'fixed' as 'fixed',
        width: '100dvw',
        height: '100dvh',
        objectFit: 'cover' as 'cover',
        zIndex: -1,
        overflow: 'hidden',
    },
    largeDivider: {
        marginBottom: '5rem',
    },
}

const AboutPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(updateLayout({ innerWidth: window.innerWidth, innerHeight: window.innerHeight }));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    return (
        <div style={styles.container}>
            <Image src={bgImg} alt="Background image" style={styles.bgImg} priority />
            <Header />
            <div style={styles.largeDivider} />
            <WelcomeSection />
            <div style={styles.sectionCntnr}>
                <ProjectSection />
            </div>
            <AboutMe />
            <ProfileSection />
            <Skills />
            <div style={styles.sectionCntnr}>
                <SkillsSection />
            </div>
        </div>
    );
};

export default AboutPage;
