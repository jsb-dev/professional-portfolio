import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Image from 'next/image';
import imageUrl from '@/assets/images/profile.jpg';
import { center, btn } from '@/styles/shared';

const minHeight = 400;
const padding = 0;

const styles: Record<string, React.CSSProperties> = {
    profileCntnr: {
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 0 3rem .25rem rgba(255, 255, 255, 0.1), inset 0 0 2rem 1rem rgba(0, 0, 0, 0.7)',
        borderRadius: '.5rem',
        border: '0.1rem solid rgba(255, 255, 255, 0.3)',
        textAlign: 'center' as 'center',
        width: 'min(85dvw, 600px)',
        minHeight,
        padding,
    },

    imgCntnr: {
        ...center,
        backgroundColor: 'rgba(50, 44, 50, .8)',
    },

    profileImg: {
        borderRadius: '50%',
        height: 'auto',
        padding: '1rem',
    },

    profileHeader: {
        padding,
        color: 'rgb(228, 229, 235)',
        width: '100%',
        fontSize: '16pt',
    },

    profileDesc: {
        padding,
        color: 'rgb(202, 202, 204)',
        width: '80%',
        fontSize: '10pt',
    },
};

interface ProfileCardProps {
    viewportIsPortable: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ viewportIsPortable }) => {
    const animatedElements = useSelector((state: RootState) => state.ui.animatedElements);
    const profileCntnrRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(profileCntnrRef, 'profileCntnrRef');

    const profileCntnrStyle = {
        ...styles.profileCntnr,
        flexDirection: viewportIsPortable ? 'column' : 'row' as 'column' | 'row',
    }

    const imgStyle = {
        ...styles.profileImg,
        width: viewportIsPortable ? '70%' : '80%',
    }

    const orientation = {
        width: viewportIsPortable ? '90%' : '50%',
        minHeight: viewportIsPortable ? '' : minHeight,
        padding: viewportIsPortable ? '1rem' : '',
    }

    const imgCntnrStyle = {
        ...styles.imgCntnr,
        ...orientation,
    }

    const textCntnrStyle = {
        ...center,
        ...orientation,
    }

    const cntnrAnimation = animatedElements['profileCntnrRef'] ? 'transition-up' : 'blank';
    const cntntAnimation = animatedElements['profileCntnrRef'] ? 'transition-left' : 'blank';

    return (
        <div ref={profileCntnrRef} className={cntnrAnimation} style={profileCntnrStyle} >
            <div style={imgCntnrStyle}>
                <Image src={imageUrl} alt="A photo of Jacob within a circle headshot frame" style={imgStyle} />
            </div>
            <div ref={profileCntnrRef} className={cntntAnimation} style={textCntnrStyle}>
                <h3 style={styles.profileHeader}>JACOB BOOTH</h3>
                <p style={styles.profileDesc}>Full Stack Developer,<br />Multimedia Specialist</p>
                <button style={btn}>Contact</button>
            </div>
        </div>
    );
};

export default ProfileCard;