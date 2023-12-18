import diatImage from '@/assets/images/diat.png';
import applicateImage from '@/assets/images/applicate.png';
import jsbDevImage from '@/assets/images/jsbdev.png';
import jsbDevV1Image from '@/assets/images/v1.png';

const names = {
    diat: 'Diat',
    applicate: 'Applicate',
    jsbDev: 'JSBDEV',
    jsbDevV1: 'jsb-dev v1'
}

const urls = {
    diat: 'https://diat.vercel.app',
    applicate: 'https://applicate.vercel.app',
    jsbDev: 'https://jsbdev.vercel.app',
    jsbDevV1: 'https://jsb-dev.vercel.app',
}

const desc = {
    diat: 'Diat is a performant drag-and-drop diagram editor. It supports images, URL summaries, and rich text, enabling users to create complex and informative diagrams with ease.',
    applicate: 'Applicate is a collaborative rich text editor built using TipTap.js and websockets. It allows multiple users to edit documents in real-time, providing a seamless collaborative experience.',
    jsbDev: 'JSB-DEV is my professional portfolio showcasing a range of software projects and technical skills, highlighting my journey and growth as a software developer.',
    jsbDevV1: 'jsb-dev v1 is my first academic portfolio. It demonstrates a responsive UI designed with Vue3 and first-party resources, reflecting my early stages in web development.'
}

export const projects = [
  {
    img: diatImage,
    description: desc.diat,
    projectName: names.diat,
    projectLink: urls.diat
  },
  {
    img: applicateImage,
    description: desc.applicate, 
    projectName: names.applicate,
    projectLink: urls.applicate
  },
  {
    img: jsbDevImage,
    description: desc.jsbDev,
    projectName: names.jsbDev,
    projectLink:  urls.jsbDev
  },
  {
    img: jsbDevV1Image,
    description: desc.jsbDevV1,
    projectName: names.jsbDevV1,
    projectLink: urls.jsbDevV1
  },
];

export default projects;
