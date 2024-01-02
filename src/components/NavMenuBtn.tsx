import React, { useState } from 'react';
import { center } from '@/styles/shared';
import { btn } from '@/styles/shared';
import MenuIcon from '@/assets/icons/MenuIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import topIcon from '../../public/assets/icons/back_to_top_icon.svg';
import cntctIcon from '../../public/assets/icons/contact_icon.svg';
import prflIcon from '../../public/assets/icons/profile_icon.svg';
import prtflioIcon from '../../public/assets/icons/portfolio_icon.svg';
import skillsIcon from '../../public/assets/icons/skills_icon.svg';

const styles: Record<string, React.CSSProperties> = {
    modal: {
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: 3,
    },

    nav: {
        position: 'fixed',
        top: '5rem',
        right: '-1.2rem',
        display: 'flex',
        flexDirection: 'column',
    },

    btn: {
        ...btn,
        ...center,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '0.1rem solid rgba(255, 255, 255, 0.3)',
        borderRadius: '0.3rem',
        width: 50,
        height: 50,
        zIndex: 5,
    },

    icon: {
        width: 25,
        height: 'auto',
    },
};

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const NavMenuBtn = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div style={center}>
            <button style={styles.btn} onClick={toggleMenu}>
                {isMenuOpen ? <CloseIcon color={true} /> : <MenuIcon />}
            </button>
            {isMenuOpen && (
                <div style={styles.modal}>
                    <nav style={styles.nav}>
                        <button style={styles.btn} onClick={() => scrollToSection('page-top')}>
                            <img src={topIcon.src} alt="Back to top" style={styles.icon} />
                        </button>
                        <button style={styles.btn} onClick={() => scrollToSection('portfolio-section-anchor')}>
                            <img src={prtflioIcon.src} alt="Portfolio" style={styles.icon} />
                        </button>
                        <button style={styles.btn} onClick={() => scrollToSection('profile-section')}>
                            <img src={prflIcon.src} alt="Profile" style={styles.icon} />
                        </button>
                        <button style={styles.btn} onClick={() => scrollToSection('skills-section')}>
                            <img src={skillsIcon.src} alt="skills" style={styles.icon} />
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default NavMenuBtn;
