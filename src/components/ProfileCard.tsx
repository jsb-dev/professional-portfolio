import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import openTo from '@/utils/openTo';
import { center, btn } from '@/styles/shared';
import { urls } from '@/assets/content/projectContent';
import imageUrl from '../../public/assets/images/profile.jpg';
import emailIcon from '../../public/assets/icons/email_icon.svg'
import githubIcon from '../../public/assets/icons/github_icon.svg'
import linkedinIcon from '../../public/assets/icons/linkedin_icon.svg'

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
        marginTop: '3rem',
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

    linkCntnr: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10pt',
        padding: '1rem 0 0 0',
        margin: 0,
    },

    link: {
        padding: '0 1rem',
        margin: 0,
    }
};

interface ProfileCardProps {
    viewportIsPortable: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ viewportIsPortable }) => {
    const downloadRef: React.RefObject<HTMLAnchorElement> | null = useRef(null);
    const animatedElements = useSelector((state: RootState) => state.ui.animatedElements);
    const profileCntnrRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(profileCntnrRef, 'profileCntnrRef');

    const handleResumeDownload = () => {
        downloadRef.current?.click();
    };

    const profileCntnrStyle = {
        ...styles.profileCntnr,
        flexDirection: viewportIsPortable ? 'column' : 'row' as 'column' | 'row',
        marginBottom: viewportIsPortable ? '3rem' : '',
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
                <img src={imageUrl.src} alt="A photo of Jacob within a circle headshot frame" style={imgStyle} />
            </div>
            <div ref={profileCntnrRef} className={cntntAnimation} style={textCntnrStyle}>
                <h3 style={styles.profileHeader}>JACOB BOOTH</h3>
                <p style={styles.profileDesc}>Full Stack Dev<br />React Spec<br />Multimedia Prod</p>
                <button style={{ ...btn, width: 150 }} onClick={handleResumeDownload}>RESUME</button>
                <a href="/Jacob Booth.pdf" download style={{ display: 'none' }} ref={downloadRef}></a>
                <div>
                    <div style={styles.linkCntnr}>
                        <img src={emailIcon.src} alt="An icon of the @ symbol" width={20} height={20} />
                        <a onClick={openTo(`${urls.email}`)} style={styles.link}>jsb-dev@outlook.com</a>
                    </div>
                    <div style={styles.linkCntnr}>
                        <img src={linkedinIcon.src} alt="An icon of the LinkedIn logo" width={20} height={20} />
                        <a onClick={openTo(`${urls.linkedin}`)} style={styles.link}>Jacob Booth</a>
                    </div>
                    <div style={styles.linkCntnr}>
                        <img src={githubIcon.src} alt="An icon of the GitHub logo" width={20} height={20} />
                        <a onClick={openTo(`${urls.github}`)} style={styles.link}>jsb-dev</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;