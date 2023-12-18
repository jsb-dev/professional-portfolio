import React from 'react';
import { center } from '@/styles/shared';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

const styles: Record<string, React.CSSProperties> = {
    section: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
    },

    description: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column' as 'column',
        padding: '2rem 0',
    },

    svgCntnr: {
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        width: '100%',
    },
};

type SkillTopicProps = {
    viewportIsPortable: boolean;
    svg: StaticImageData;
    description: string;
    reverse?: boolean;
    bgColor: string;
    header: string;
};

const SkillTopic: React.FC<SkillTopicProps> = ({
    viewportIsPortable,
    svg,
    description,
    reverse = false,
    bgColor,
    header,
}) => {

    const sectionStyle = {
        ...styles.section,
        flexDirection: viewportIsPortable ? 'column' : 'row' as 'column' | 'row',
    }

    const orientation = {
        width: viewportIsPortable ? '100%' : '50%',
        height: viewportIsPortable ? '50%' : '100%',
    }

    const svgCntnrStyle = {
        ...styles.svgCntnr,
        ...orientation,
    };

    const svgStyle = {
        width: viewportIsPortable ? '100%' : '60%',
        height: viewportIsPortable ? '100%' : '60%',
    }

    const descCntnrStyle = {
        ...styles.description,
        ...orientation,
        backgroundColor: bgColor,
    };

    const textStyle = {
        ...styles.text,
        textAlign: reverse && !viewportIsPortable ? 'right' : 'left' as 'right' | 'left',
    };

    if (reverse && !viewportIsPortable) {
        sectionStyle.flexDirection += '-reverse';
    }

    return (
        <div style={sectionStyle}>
            <div style={svgCntnrStyle}>
                <Image src={svg} alt="Breakdown" style={svgStyle}
                ></Image>
            </div>
            <div style={descCntnrStyle}>
                <h3 style={textStyle}>{header}</h3>
                <p style={textStyle}>{description}</p>
            </div>
        </div>
    );
};

export default SkillTopic;
