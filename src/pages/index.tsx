import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLayout } from '@/redux/slices/uiSlice';
import Image from 'next/image';
import Head from 'next/head';
import { center } from '@/styles/shared';
import Header from '@/components/Header';
import LogoSection from '@/sections/LogoSection';
import ProfileSection from '@/sections/ProfileSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectSection from '@/sections/PortfolioSection';
import AboutMe from '@/dividers/AboutMe';
import Skills from '@/dividers/Skills';
import Footer from '@/components/Footer';
import bgImg from '@/assets/images/bg-img.jpg';

const styles: Record<string, React.CSSProperties> = {
    container: {
        overflow: 'hidden',
        padding: 0,
        margin: 0,
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
        margin: '0 0 2rem 0',
        padding: 0,
    },
}

const IndexPage: React.FC = () => {
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
        <>
            <Head>
                <title>JSB-DEV</title>
                <meta name="description" content="A portfolio website for JSB-DEV, a full-stack web developer based in Melbourne, Australia." />
                <meta name="keywords" content="JSB-DEV, JSB, DEV, portfolio, web developer, full-stack, full stack, fullstack, web, developer, programmer, coding, coding portfolio, portfolio website, website, web developer portfolio, web developer portfolio website, web developer portfolio" />
            </Head>
            <div id='page-top' style={styles.container}>
                <Image src={bgImg} alt="Background image" style={styles.bgImg} priority />
                <Header />
                <div style={styles.largeDivider} />
                <div style={styles.sectionCntnr} ><LogoSection /></div>
                <div style={styles.sectionCntnr} ><ProjectSection /></div>
                <div style={styles.sectionCntnr} ><AboutMe /></div>
                <div style={styles.sectionCntnr} ><ProfileSection /></div>
                <div style={styles.sectionCntnr} ><Skills /></div>
                <div style={styles.sectionCntnr} ><SkillsSection /></div>
            </div>
            <Footer />
        </>
    );
};

export default IndexPage;
