import React from 'react';
import Image from 'next/image';
import imageUrl from '@/assets/images/profile.jpg';

const styles = {
    profileCard: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2rem 0',
        boxShadow: '0 0 .5rem .5rem rgba(255, 255, 255, 0.2), inset 0 0 2rem .5rem rgba(0, 0, 0, 0.7)',
        backgroundColor: 'rgb(94, 103, 128)',
        borderRadius: '1rem',
        textAlign: 'center',
        width: 'min(90dvw, 700px)',
        minHeight: 400,
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '1rem',
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '3dvh 1rem',
    },
    profileImage: {
        margin: '1rem',
        borderRadius: '1rem',
        boxShadow: '0 0 5rem 0.1rem rgba(94, 103, 128, 0.8)',
        objectFit: 'cover',
    },
    profileHeader: {
        margin: '.5rem',
        color: 'rgb(228, 229, 235)',
    },
    profileDescription: {
        margin: '.5rem',
        color: 'rgb(202, 202, 204)',
    },
    contactBtn: {
        backgroundColor: 'rgb(84, 116, 191)',
        color: 'white',
        border: 'none',
        borderRadius: '1rem',
        margin: '1rem 2rem',
        padding: '.5rem',
        cursor: 'pointer',
    },
};

interface ProfileCardProps {
    viewportIsPortable: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ viewportIsPortable }) => {
    return (
        <div style={{
            ...styles.profileCard,
            flexDirection: viewportIsPortable ? 'column' : 'row',
        }} >
            <div style={{ ...styles.imageContainer, width: viewportIsPortable ? '100%' : '50%', height: viewportIsPortable ? '50%' : '100%', padding: viewportIsPortable ? '1rem' : '5rem 0' }}>
                <Image src={imageUrl} alt="Photo" style={{ ...styles.profileImage, width: viewportIsPortable ? '70%' : '60%' }} />
            </div>
            <div style={{
                ...styles.profileContainer,
                width: viewportIsPortable ? '100%' : '50%',
                height: viewportIsPortable ? '45%' : '',
            }}>
                <h2 style={styles.profileHeader}>Jacob Booth</h2>
                <p style={styles.profileDescription}>Full Stack Developer and<br />Multimedia Specialist</p>
                <button style={styles.contactBtn}>Contact</button>
            </div>
        </div>
    );
};

export default ProfileCard;