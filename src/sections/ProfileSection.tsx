import React from 'react';
import ProfileCard from '@/components/ProfileCard';

const centerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

const styles = {
    sectionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        padding: '1rem',
    },
    cardContainer: {
        ...centerStyles,
    },
    contentContainer: {
        ...centerStyles,
    },
    header: {
        width: '100%',
        padding: '1rem',
    }
}

interface ProfileCardProps {
    viewportIsVertical: boolean;
    viewportIsPortable: boolean;
}

const ProfileSection: React.FC<ProfileCardProps> = ({ viewportIsPortable }) => {
    return (
        <section style={{ ...styles.sectionContainer, flexDirection: viewportIsPortable ? 'column' : 'row' }}>
            <div style={styles.cardContainer}>
                <ProfileCard viewportIsPortable={viewportIsPortable} />
            </div>
            <div style={{ ...styles.contentContainer, width: viewportIsPortable ? '100%' : '50%', padding: viewportIsPortable ? '.5rem' : '2rem' }}>
                <h2 style={styles.header}>Hello There...</h2>
                <p>My name is Jacob. I design and implement full stack web apps with a focus on effective, efficient, and elegant solutions. I leverage a diverse background in media production to bring designs and ideas to life.</p>
                <p>My development journey began in 2020 with the curiosity to write computer programs in C++. After commencing tertiary studies in IT and Computer Science, I quickly refined my focus to web development as my core focus.</p>
                <p>I&apos;m an individual driven by curiosity and eagerness to grow. Outside of development, I am usually saving the day (in a video game), or cooking exotic deliciousness!</p>
            </div>
        </section>
    );
}

export default ProfileSection;