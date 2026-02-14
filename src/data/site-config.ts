import avatar from '../assets/images/avatar.jpg';
import myPhoto from '../assets/images/my-photo.jpeg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://edwardhewes.com',
    avatar: {
        src: avatar,
        alt: 'Edward Hewes'
    },
    title: 'Edward Hewes',
    subtitle: 'Freelance Journalist & Writer',
    description: 'Portfolio website of Edward Hewes, a freelance journalist and writer',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Work',
            href: '/work'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Muck Rack',
            href: 'https://muckrack.com/edward-hewes-1'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/edward-h-732388233/'
        },
    ],
    hero: {
        text: "Edward Hewes is a freelance journalist and writer specializing in technology, business, and lifestyle topics. With a keen eye for detail and a passion for storytelling, Edward crafts compelling content that engages readers and drives results.",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
        ,
        photo: {
            src: myPhoto,
            alt: 'Edward Hewes portrait'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
