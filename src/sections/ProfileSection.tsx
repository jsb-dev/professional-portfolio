import React from 'react';
import ProfileCard from '@/components/ProfileCard';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {
    sectionCntnr: {
        ...center,
        minHeight: '60vh',
        margin: '10rem 0',
    },
    cardCntnr: {
        ...center,
    },
    contentCntnr: {
        ...center,
    },
    header: {
        width: '100%',
    }
}

interface ProfileCardProps {
    viewportIsPortable: boolean;
}

const ProfileSection: React.FC<ProfileCardProps> = ({ viewportIsPortable }) => {
    const sectionCntnrStyles = {
        ...styles.sectionCntnr,
        flexDirection: viewportIsPortable ? 'column' : 'row' as 'column' | 'row',
    }

    const cardCntnrStyles = {
        ...styles.cardCntnr,
        margin: viewportIsPortable ? '2rem 0' : '',
    }

    const contentCntnr = {
        ...styles.contentCntnr,
        width: viewportIsPortable ? '100%' : '50%',
        padding: viewportIsPortable ? '0 1rem' : '0 0 0 5rem'
    }

    return (
        <section style={sectionCntnrStyles}>
            <div style={cardCntnrStyles}>
                <ProfileCard viewportIsPortable={viewportIsPortable} />
            </div>
            <div style={contentCntnr}>
                <h2 style={styles.header}>Hello there...</h2>
                <p>My name is Jacob. I design and implement full stack web apps with a focus on effective, efficient, and elegant solutions. I leverage a diverse background in media production to bring designs and ideas to life.</p>
                <p>My development journey began in 2020 with the curiosity to write computer programs in C++. After commencing tertiary studies in IT and Computer Science, I quickly refined my focus to web development as my core focus.</p>
                <p>I&apos;m an individual driven by curiosity and eagerness to grow. Outside of development, I am usually saving the day (in a video game), or cooking exotic deliciousness!</p>
            </div>
        </section>
    );
}

export default ProfileSection;