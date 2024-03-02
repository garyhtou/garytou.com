import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import GaryTouPic from '../public/Gary Tou.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home: NextPage = () => {
	const socials = [
		{
			name: 'Linkedin',
			link: 'https://www.linkedin.com/in/garyhtou/',
		},
		{
			name: 'GitHub',
			link: 'https://github.com/garyhtou',
		},
		{
			name: 'Email',
			link: 'mailto:gary@garytou.com',
		},
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Gary Tou',
		givenName: 'Gary',
		familyName: 'Tou',
		jobTitle: 'Engineering Manager',
		email: 'mailto:gary@garytou.com',
		url: 'https://garytou.com',
		image: 'https://assets.garytou.com/profile/GaryTou.jpg',
		gender: 'male',
		// hasOccupation: [
		// 	{
		// 		'@type': 'Occupation',
		// 		name: 'Software Engineer',
		// 		sameAs: 'https://en.wikipedia.org/wiki/Programmer',
		// 	},
		// ],
		worksFor: {
			'@type': 'Organization',
			name: 'Hack Club',
			url: 'https://hackclub.com',
			sameAs: [
				'https://hackclub.com',
				'https://en.wikipedia.org/wiki/Hack_Club',
				'https://hackclub.com/hcb',
			],
		},
		affiliation: [
			{
				'@type': 'Organization',
				name: 'Hack Club',
				url: 'https://hackclub.com',
				sameAs: [
					'https://hackclub.com',
					'https://en.wikipedia.org/wiki/Hack_Club',
					'https://hackclub.com/bank',
				],
			},
			{
				'@type': 'Organization',
				name: 'synHacks',
				url: 'https://synhacks.org',
				sameAs: 'https://synhacks.org',
			},
			{
				'@type': 'Organization',
				name: 'Washington FBLA',
				url: 'https://wafbla.org',
				sameAs: 'https://wafbla.org/',
			},
			{
				'@type': 'Organization',
				name: 'FBLA-PBL',
				url: 'https://fbla-pbl.org',
				sameAs: [
					'https://fbla-pbl.org',
					'https://en.wikipedia.org/wiki/FBLA-PBL',
				],
			},
			{
				'@type': 'Organization',
				name: 'TEDxYouth@Seattle',
				url: 'https://tedxyouthseattle.com',
				sameAs: 'https://tedxyouthseattle.com',
			},
			{
				'@type': 'Organization',
				name: 'DECA',
				url: 'https://www.deca.org',
				sameAs: [
					'https://www.deca.org',
					'https://en.wikipedia.org/wiki/DECA_(organization)',
				],
			},
		],
		alumniOf: [
			{
				'@type': 'EducationalOrganization',
				name: 'Seattle University',
				sameAs: 'https://www.seattleu.edu',
			},
			{
				'@type': 'EducationalOrganization',
				name: 'Hazen High School',
				sameAs: 'https://hazen.rentonschools.us',
			},
		],
		sameAs: [
			'https://unsplash.com/@garyhtou',
			'https://twitter.com/garyhtou',
			'https://www.facebook.com/garyhtou/',
			...socials.map((social) => social.link),
		],
		disambiguatingDescription: 'Gary Tou',
	};

	const SubtleLink = ({
		href,
		children,
	}: {
		href: string;
		children: string;
	}) => (
		<a
			href={href}
			style={{ color: 'inherit', textDecoration: 'underline dotted' }}
			target='_blank'
			rel='noreferrer'
		>
			{children}
		</a>
	);

	return (
		<>
			<Head>
				<title>Gary Tou</title>
				<meta
					name='description'
					content="Hello, I use Ruby on Rails to invent Nonprofit Fiscal Sponsorship! Engineering Manager at Hack Club."
				/>
				<meta name='robots' content='index, follow' />
				<link rel='canonical' href='https://garytou.com' />
				<link rel='icon' href='/favicon.jpeg' />
				<link
					href='https://fonts.googleapis.com/css?family=Roboto%3A300%2C400%2C500%2C700%7CRoboto+Slab%3A400%2C700&subset=latin%2Clatin-ext&ver=2.5.7'
					rel='stylesheet'
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData, null, 2),
					}}
				></script>

				<script
					async
					defer
					data-website-id='97dfe447-36a1-495a-98e5-2321310ebfeb'
					src='https://umami.garytou.com/umami.js'
				></script>
			</Head>

			<div className={styles.container}>
				<main className={styles.main}>
					<article>
						<h1>Gary Tou</h1>
						<p className={styles.description}>
							Hello<span aria-hidden='true'> 👋</span>, I use{' '}
							<SubtleLink href='https://rubyonrails.org/'>
								Ruby on Rails
							</SubtleLink>{' '}
							to reinvent Nonprofit{' '}
							<SubtleLink href='https://en.wikipedia.org/wiki/Fiscal_sponsorship'>
								Fiscal Sponsorship
							</SubtleLink>
							! I love anything tech/business and work as an{' '}
							<strong>Engineering Manager</strong> at{' '}
							<SubtleLink href='https://hackclub.com/'>Hack Club</SubtleLink>{' '}
							building <strong>financial tools</strong> 🏦 to help people run{' '}
							<strong>nonprofit</strong> organizations!
						</p>
					</article>
					<section className={styles.links}>
						{socials.map((social) => (
							<p key={social.name + '_' + social.link}>
								<a href={social.link} target='_blank' rel='noreferrer'>
									{social.name}
								</a>
							</p>
						))}
					</section>
				</main>
			</div>
		</>
	);
};

export default Home;
