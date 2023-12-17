import React from 'react';
import Image from 'next/image';
import imageUrl from '@/assets/images/profile.jpg';
import { center, btn } from '@/styles/shared';

const minHeight = 400

const styles: Record<string, React.CSSProperties> = {
    profileCntnr: {
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 0 3rem .25rem rgba(255, 255, 255, 0.2), inset 0 0 2rem 1rem rgba(0, 0, 0, 0.7)',
        backgroundColor: 'rgba(43, 42, 43, .7)',
        borderRadius: '1rem',
        textAlign: 'center' as 'center',
        width: 'min(90dvw, 600px)',
        minHeight,
        padding: 0,
    },

    imgCntnr: {
        ...center,
        backgroundColor: 'rgba(53, 47, 59, .6)',
        borderRadius: '1rem',
    },

    profileImg: {
        borderRadius: '50%',
        boxShadow: '0 0 5rem 0.1rem rgba(94, 103, 128, 0.8)',
        objectFit: 'cover' as 'cover',
    },

    profileHeader: {
        margin: '.5rem 0',
        color: 'rgb(228, 229, 235)',
    },

    profileDesc: {
        margin: '.5rem',
        color: 'rgb(202, 202, 204)',
    },
};

interface ProfileCardProps {
    viewportIsPortable: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ viewportIsPortable }) => {

    const profileCntnrStyle = {
        ...styles.profileCntnr,
        flexDirection: viewportIsPortable ? 'column' : 'row' as 'column' | 'row',
    }

    const imgStyle = {
        ...styles.profileImg,
        width: viewportIsPortable ? '70%' : '80%',
        height: viewportIsPortable ? '70%' : '80%',
    }

    const orientation = {
        width: viewportIsPortable ? '100%' : '50%',
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

    return (
        <div style={profileCntnrStyle} >
            <div style={imgCntnrStyle}>
                <Image src={imageUrl} alt="Photo" style={imgStyle} />
            </div>
            <div style={textCntnrStyle}>
                <h1 style={styles.profileHeader}>JACOB BOOTH</h1>
                <p style={styles.profileDesc}>Full Stack Developer and<br />Multimedia Specialist</p>
                <button style={btn}>Contact</button>
            </div>
        </div>
    );
};

export default ProfileCard;