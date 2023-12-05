import React, { useEffect } from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { updateLayout } from '@/redux/slices/uiSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Header from '@/shared/Header';
import WelcomeSection from '@/sections/WelcomeSection';
import ProfileSection from '@/sections/ProfileSection';
import bgImg from '@/assets/images/bg-img.jpg';

const styles = {
    container: {
        position: 'relative',
    },
    bgImg: {
        position: 'fixed',
        width: '100dvw',
        height: '100dvh',
        objectFit: 'cover',
        zIndex: -1
    },
    largeDivider: {
        marginBottom: '5rem',
    },
}

const AboutPage: React.FC = () => {
    const { viewportIsPortable, viewportIsVertical } = useSelector((state: RootState) => state.ui);
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
        <div style={styles.container} className='bg-container'>
            <Image src={bgImg} alt="Background image" style={styles.bgImg} />
            <Header viewportIsVertical={viewportIsVertical} />
            <div style={styles.largeDivider} />
            <WelcomeSection viewportIsVertical={viewportIsVertical} viewportIsPortable={viewportIsPortable} />
            <ProfileSection viewportIsVertical={viewportIsVertical} viewportIsPortable={viewportIsPortable} />
        </div>
    );
};

export default AboutPage;
