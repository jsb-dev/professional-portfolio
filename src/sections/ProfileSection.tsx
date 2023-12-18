import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ProfileCard from '@/components/ProfileCard';
import { center } from '@/styles/shared';

const styles: Record<string, React.CSSProperties> = {
    sectionCntnr: {
        width: '100%',
        padding: '3rem 2rem',
        minHeight: '95dvh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: 'solid 1px rgba(255, 255, 255, 0.2)',
    },
    cntntCntnr: {
        ...center,
    },
    h2: {
        textAlign: 'left' as 'left',
    },
    h3: {
        padding: '0 0 2rem 0',
        textAlign: 'left' as 'left',
    },
    article: {
        padding: '2rem',
    }
}

const ProfileSection: React.FC = () => {
    const { viewportIsPortable } = useSelector((state: RootState) => state.ui);

    const cntntCntnrStyle = {
        ...styles.cntntCntnr,
        flexDirection: viewportIsPortable ? 'column' : 'row-reverse' as 'column' | 'row-reverse',
    }

    const cardCntnrStyle = {
        ...center,
        margin: viewportIsPortable ? '2rem 0' : '0 0 0 4rem',
    }

    const articleStyle = {
        ...styles.article,
        width: viewportIsPortable ? '80%' : '40%',
    }

    const h2Style = {
        ...styles.h2,
        textAlign: viewportIsPortable ? 'center' : 'left' as 'center' | 'left',
        padding: viewportIsPortable ? '2rem 0 2rem 0' : '2rem 2rem 0 4rem',
    }

    return (
        <section style={styles.sectionCntnr}>
            <h2 style={h2Style}>PROFILE</h2>
            <div style={cntntCntnrStyle}>
                <div style={cardCntnrStyle}>
                    <ProfileCard viewportIsPortable={viewportIsPortable} />
                </div>
                <article style={articleStyle}>
                    <h3 style={styles.h3}>HELLO THERE...</h3>
                    <p>My name is Jacob. I design and implement full stack web apps with a focus on effective, efficient, and elegant solutions. I leverage a diverse background in media production to bring designs and ideas to life.</p>
                    <p>My development journey began in 2020 with the curiosity to write computer programs in C++. After commencing tertiary studies in IT and Computer Science, I quickly refined my focus to web development as my core focus.</p>
                    <p>I&apos;m an individual driven by curiosity and eagerness to grow. Outside of development, I am usually saving the day (in a video game), or cooking exotic deliciousness!</p>
                </article>
            </div>
        </section>
    );
}

export default ProfileSection;