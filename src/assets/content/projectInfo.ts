import diatImage from './assets/diat-placeholder.jpg';
import applicateImage from './assets/applicate-placeholder.jpg';
import jsbDevImage from './assets/jsb-dev-placeholder.jpg';
import jsbDevV1Image from './assets/jsb-dev-v1-placeholder.jpg';

const urls = {
    diat: 'https://diat.vercel.app',
    applicate: 'https://applicate.vercel.app',
    jsbDev: 'https://jsbdev.vercel.app',
    jsbDevV1: 'https://jsb-dev.vercel.app',
}

export const projects = [
  {
    img: diatImage,
    description: 'Diat is a performant drag-and-drop diagram editor. It supports images, URL summaries, and rich text, enabling users to create complex and informative diagrams with ease.',
    projectName: 'Diat',
    projectLink: 'http://placeholder-diat-link.com'
  },
  {
    img: applicateImage,
    description: 'Applicate is a collaborative rich text editor built using TipTap.js and websockets. It allows multiple users to edit documents in real-time, providing a seamless collaborative experience.',
    projectName: 'Applicate',
    projectLink: 'http://placeholder-applicate-link.com'
  },
  {
    img: jsbDevImage,
    description: 'JSB-DEV is my professional portfolio showcasing a range of software projects and technical skills, highlighting my journey and growth as a software developer.',
    projectName: 'JSB-DEV',
    projectLink: 'http://placeholder-jsb-dev-link.com'
  },
  {
    img: jsbDevV1Image,
    description: 'jsb-dev v1 is my first academic portfolio. It demonstrates a responsive UI designed with Vue3 and first-party resources, reflecting my early stages in web development.',
    projectName: 'jsb-dev v1',
    projectLink: 'http://placeholder-jsb-dev-v1-link.com'
  }
];

export default projects;
