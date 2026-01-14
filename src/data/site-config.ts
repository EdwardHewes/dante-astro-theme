import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://edwardhewes.com',
    avatar: {
        src: avatar,
        alt: 'Edward Hewes'
    },
    description: 'Portfolio website of Edward Hewes, a freelance journalist and writer',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
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
        title: 'Edward Hewes',
        text: "Edward Hewes is a freelance journalist and writer specializing in technology, business, and lifestyle topics. With a keen eye for detail and a passion for storytelling, Edward crafts compelling content that engages readers and drives results.",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
