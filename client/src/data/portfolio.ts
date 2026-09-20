import type { IconType } from 'react-icons';
import { DiMongodb } from 'react-icons/di';
import {
	FaBootstrap, FaGithub, FaLinkedinIn, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaWhatsapp, FaServer, FaMousePointer
} from 'react-icons/fa';
import { IoMailOutline, IoRocketSharp } from 'react-icons/io5';
import { MdSecurity, MdImage, MdSms } from 'react-icons/md';
import {
	SiExpress, SiMysql, SiTailwindcss, SiFigma, SiFramer, SiJavascript, SiFlutter, SiNestjs, SiFastapi, SiPostgresql, SiFirebase, SiAuth0, SiJsonwebtokens, SiCloudinary, SiRazorpay, SiPaytm, SiGooglemaps, SiLeaflet, SiVercel, SiRender, SiRailway, SiRedis, SiPhonepe
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandVscode } from 'react-icons/tb';

export type SocialLink = {
	label: string;
	href: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type NavButton = {
	label: string;
	href: string;
	className: string;
};

export type TimelineItem = {
	role: string;
	org: string;
	period: string;
	bullets: string[];
};

export type TimelineSection = {
	heading: string;
	items: TimelineItem[];
};

export type TechItem = {
	label: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type TechGroup = {
	heading: string;
	items: TechItem[];
	className?: string;
};

export const personal = {
	name: 'SAGAR KANDA',
	fullName: 'Sagar Kanda',
	title: 'Full Stack Developer',
	greeting: 'Hi, I am',
	repoUrl: 'https://github.com/sagar-6435/portfolio-1',
	repoStarLabel: '⭐ Star this repo',
	showRepoStar: true,
};

export const socialLinks: SocialLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/sagar-6435',
		icon: FaGithub,
		iconColor: 'rgba(255, 255, 255, 0.9)',
		glowColor: 'rgba(255, 255, 255, 0.4)',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/sagar-kanda-624a94325/',
		icon: FaLinkedinIn,
		iconColor: 'rgb(0, 160, 220)',
		glowColor: 'rgba(0, 160, 220, 0.6)',
	},
	{
		label: 'Email',
		href: 'mailto:kandasagar2006@gmail.com',
		icon: IoMailOutline,
		iconColor: 'rgb(18, 122, 209)',
		glowColor: 'rgba(18, 122, 209, 0.7)',
	},
];

export const navButtons: NavButton[] = [
	{ label: 'About Me', href: '/#about-me', className: 'first' },
	{ label: 'Tech', href: '/#tech-stack', className: 'sec' },
];

export const about = {
	section: { title: 'About', subtitle: 'ME' },
	intro: [
		"👋 Hey, I'm Kanda Sagar, a Full Stack Developer.",
		"I've been working with React and Node for the past three years, building web applications that are fast, scalable and user-friendly.",
		"I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.",
	],
	timeline: [
		{
			heading: 'Experience',
			items: [
				{
					role: 'Full Stack Developer',
					org: '@Wimetrix',
					period: '2022 - Present',
					bullets: [
						'Contributed significantly to the development of main project Sooperwizer, a pivotal project for automating and optimizing textile processes.',
						'Designed and developed multiple interactive data visualization dashboards.',
						'Built several Android applications using React Native.',
					],
				},
			],
		},
		{
			heading: 'Certification',
			items: [
				{
					role: 'Full Stack Developer',
					org: 'House of Professionals (HOP)',
					period: '2021 - 2022',
					bullets: [
						'Earned a Full Stack Development certification from the House of Professional Developers.',
						'Awarded for securing the top position in class, demonstrating strong skills and commitment.',
					],
				},
			],
		},
		{
			heading: 'Education',
			items: [
				{
					role: 'B.Tech in Artificial Intelligence and Data Science',
					org: 'SRKR Engineering college',
					period: '2024 - 2028',
					bullets: [],
				},
			],
		},
	] satisfies TimelineSection[],
};

export type Project = {
	title: string;
	description: string;
	techStack: string[];
	githubUrl?: string;
	liveUrl?: string;
};

export const projectsData = {
	section: { title: 'My', subTitle: 'PROJECTS' },
	projects: [
		{
			title: 'BayMax - Offline Emergency App',
			description: 'A React Native application providing offline access to critical first-aid instructions, emergency contacts, and maps.',
			techStack: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB'],
			githubUrl: 'https://github.com/sagar-6435/baymax',
			liveUrl: '#'
		},
		{
			title: 'Portfolio Website',
			description: 'A highly interactive and modern developer portfolio built with React and Vite. Features glassmorphism, dynamic glow effects, and a responsive grid system.',
			techStack: ['React', 'Vite', 'CSS', 'TypeScript'],
			githubUrl: 'https://github.com/sagar-6435/portfolio-latest',
			liveUrl: '#'
		}
	] satisfies Project[]
};

export const techStack = {
	section: { title: 'Tech', subtitle: 'SET' },
	groups: [
		{
			heading: 'UI/UX Design & Styling',
			items: [
				{ label: 'Figma', icon: SiFigma, iconColor: 'rgb(242, 78, 30)', glowColor: 'rgba(242, 78, 30, 0.4)' },
				{ label: 'Framer', icon: SiFramer, iconColor: 'rgb(0, 85, 255)', glowColor: 'rgba(0, 85, 255, 0.4)' },
				{ label: 'Adobe XD', icon: MdImage, iconColor: 'rgb(255, 97, 246)', glowColor: 'rgba(255, 97, 246, 0.4)' },
				{ label: 'CSS', icon: FaCss3Alt, iconColor: 'rgb(38, 77, 228)', glowColor: 'rgba(38, 77, 228, 0.4)' },
				{ label: 'Tailwind CSS', icon: SiTailwindcss, iconColor: 'rgb(56, 189, 248)', glowColor: 'rgba(56, 189, 248, 0.4)' },
				{ label: 'Bootstrap', icon: FaBootstrap, iconColor: 'rgb(121, 82, 179)', glowColor: 'rgba(121, 82, 179, 0.4)' },
			]
		},
		{
			heading: 'Frontend Web',
			items: [
				{ label: 'HTML', icon: FaHtml5, iconColor: 'rgb(227, 79, 38)', glowColor: 'rgba(227, 79, 38, 0.4)' },
				{ label: 'CSS', icon: FaCss3Alt, iconColor: 'rgb(38, 77, 228)', glowColor: 'rgba(38, 77, 228, 0.4)' },
				{ label: 'JavaScript', icon: SiJavascript, iconColor: 'rgb(247, 223, 30)', glowColor: 'rgba(247, 223, 30, 0.4)' },
				{ label: 'React', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.4)' },
				{ label: 'Next.js', icon: TbBrandNextjs, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.4)' },
			]
		},
		{
			heading: 'Mobile App',
			items: [
				{ label: 'Flutter', icon: SiFlutter, iconColor: 'rgb(2, 86, 155)', glowColor: 'rgba(2, 86, 155, 0.4)' },
				{ label: 'React Native', icon: FaReact, iconColor: 'rgb(97, 219, 251)', glowColor: 'rgba(97, 219, 251, 0.4)' },
			]
		},
		{
			heading: 'Backend',
			items: [
				{ label: 'Node.js', icon: FaNodeJs, iconColor: 'rgb(104, 160, 99)', glowColor: 'rgba(104, 160, 99, 0.4)' },
				{ label: 'Express', icon: SiExpress, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.4)' },
				{ label: 'NestJS', icon: SiNestjs, iconColor: 'rgb(224, 35, 78)', glowColor: 'rgba(224, 35, 78, 0.4)' },
				{ label: 'FastAPI', icon: SiFastapi, iconColor: 'rgb(0, 150, 136)', glowColor: 'rgba(0, 150, 136, 0.4)' },
			]
		},
		{
			heading: 'Database',
			items: [
				{ label: 'PostgreSQL', icon: SiPostgresql, iconColor: 'rgb(51, 103, 145)', glowColor: 'rgba(51, 103, 145, 0.4)' },
				{ label: 'MySQL', icon: SiMysql, iconColor: 'rgb(68, 121, 161)', glowColor: 'rgba(68, 121, 161, 0.4)' },
				{ label: 'MongoDB', icon: DiMongodb, iconColor: 'rgb(71, 162, 72)', glowColor: 'rgba(71, 162, 72, 0.4)' },
				{ label: 'Firebase Firestore', icon: SiFirebase, iconColor: 'rgb(255, 202, 40)', glowColor: 'rgba(255, 202, 40, 0.4)' },
			]
		},
		{
			heading: 'Authentication',
			className: 'half-width',
			items: [
				{ label: 'Firebase Auth', icon: SiFirebase, iconColor: 'rgb(255, 202, 40)', glowColor: 'rgba(255, 202, 40, 0.4)' },
				{ label: 'Auth0', icon: SiAuth0, iconColor: 'rgb(235, 84, 36)', glowColor: 'rgba(235, 84, 36, 0.4)' },
				{ label: 'JWT', icon: SiJsonwebtokens, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.4)' },
				{ label: 'OAuth 2.0', icon: MdSecurity, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.4)' },
			]
		},
		{
			heading: 'Caching',
			className: 'half-width',
			items: [
				{ label: 'Redis', icon: SiRedis, iconColor: 'rgb(220, 56, 45)', glowColor: 'rgba(220, 56, 45, 0.4)' },
			]
		},
		{
			heading: 'Notifications',
			className: 'third-width',
			items: [
				{ label: 'Firebase FCM', icon: SiFirebase, iconColor: 'rgb(255, 202, 40)', glowColor: 'rgba(255, 202, 40, 0.4)' },
			]
		},
		{
			heading: 'Payments',
			className: 'third-width',
			items: [
				{ label: 'Razorpay', icon: SiRazorpay, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.9)' },
				{ label: 'Phonepe', icon: SiPhonepe, iconColor: 'rgb(94, 49, 214)', glowColor: 'rgba(94, 49, 214, 0.4)' },
				{ label: 'Paytm', icon: SiPaytm, iconColor: 'rgb(0, 41, 112)', glowColor: 'rgba(0, 41, 112, 0.4)' },
			]
		},
		{
			heading: 'Maps / Location',
			className: 'third-width',
			items: [
				{ label: 'Google Maps', icon: SiGooglemaps, iconColor: 'rgb(66, 133, 244)', glowColor: 'rgba(66, 133, 244, 0.4)' },
				{ label: 'Leaflet', icon: SiLeaflet, iconColor: 'rgb(122, 193, 67)', glowColor: 'rgba(122, 193, 67, 0.4)' },
			]
		},
		{
			heading: 'File Storage',
			className: 'half-width',
			items: [
				{ label: 'Cloudinary', icon: SiCloudinary, iconColor: 'rgb(52, 72, 197)', glowColor: 'rgba(52, 72, 197, 0.4)' },
				{ label: 'Firebase Storage', icon: SiFirebase, iconColor: 'rgb(255, 202, 40)', glowColor: 'rgba(255, 202, 40, 0.4)' },
			]
		},
		{
			heading: 'Communication & Messaging',
			className: 'half-width',
			items: [
				{ label: 'Twilio', icon: MdSms, iconColor: 'rgb(242, 47, 70)', glowColor: 'rgba(242, 47, 70, 0.4)' },
				{ label: 'WhatsApp', icon: FaWhatsapp, iconColor: 'rgb(37, 211, 102)', glowColor: 'rgba(37, 211, 102, 0.4)' },
				{ label: 'SMTP', icon: IoMailOutline, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.4)' },
			]
		},
		{
			heading: 'Hosting / Deployment',
			className: 'half-width',
			items: [
				{ label: 'Vercel', icon: SiVercel, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.4)' },
				{ label: 'Hostinger', icon: FaServer, iconColor: 'rgb(103, 58, 183)', glowColor: 'rgba(103, 58, 183, 0.4)' },
				{ label: 'Render', icon: SiRender, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.9)' },
				{ label: 'Railway', icon: SiRailway, iconColor: 'rgb(11, 13, 14)', glowColor: 'rgba(11, 13, 14, 0.4)' },
			]
		},
		{
			heading: 'Developer Tools',
			className: 'half-width',
			items: [
				{ label: 'VS Code', icon: TbBrandVscode, iconColor: 'rgb(0, 122, 204)', glowColor: 'rgba(0, 122, 204, 0.4)' },
				{ label: 'Cursor', icon: FaMousePointer, iconColor: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.4)' },
				{ label: 'Antigravity', icon: IoRocketSharp, iconColor: 'rgb(255, 100, 100)', glowColor: 'rgba(255, 100, 100, 0.4)' },
			]
		}
	] satisfies TechGroup[],
};
