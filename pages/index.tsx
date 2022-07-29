import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import GaryTouPic from '../public/Gary Tou.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home: NextPage = () => {
	const socials = [
		// {
		// 	name: 'Instagram',
		// 	link: 'https://instagram.com/garyhtou',
		// },
		{
			name: 'Linkedin',
			link: 'https://www.linkedin.com/in/gary-tou/',
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
		jobTitle: 'Software Engineer',
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
				'https://hackclub.com/bank',
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

	return (
		<>
			<Head>
				<title>Gary Tou</title>
				<meta
					name='description'
					content="Hello, I'm a college student studying Computer Science. I love anything tech/business and work as a Software Engineer at Hack Club!"
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
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				></script>
			</Head>

			<div className={styles.container}>
				<main className={styles.main}>
					{/* <Image
						className={styles.garyTouPic}
						src={GaryTouPic}
						layout='intrinsic'
						alt='Gary Tou'
						priority
					/> */}
					<article>
						<h1>Gary Tou</h1>
						<p className={styles.description}>
							Hello 👋, I&apos;m a college student studying{' '}
							<strong>Computer Science</strong> 👨&zwj;💻. I love anything
							tech/business and work as a <strong>Software Engineer</strong> at{' '}
							<a
								href='https://hackclub.com/bank/'
								target='_blank'
								rel='noreferrer'
							>
								Hack Club
							</a>{' '}
							building <strong>financial tools</strong> 🏦 to help students run
							their own <strong>non-profits</strong>!
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
					{/* <div className={styles.socials}>
						<a
							href='https://instagram.com/garyhtou'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div> */}
				</main>
			</div>
		</>
	);
};

export default Home;
