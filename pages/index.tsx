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
			name: 'Instagram',
			link: 'https://instagram.com/garyhtou',
		},
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
			</Head>

			<div className={styles.container}>
				<div className={styles.main}>
					{/* <Image
						className={styles.garyTouPic}
						src={GaryTouPic}
						layout='intrinsic'
						alt='Gary Tou'
						priority
					/> */}
					<div>
						<h1>Gary Tou</h1>
						<p className={styles.description}>
							Hello 👋, I’m a college student studying{' '}
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
					</div>
					<div className={styles.links}>
						{socials.map((social) => (
							<p key={social.name + '_' + social.link}>
								<a href={social.link} target='_blank' rel='noreferrer'>
									{social.name}
								</a>
							</p>
						))}
					</div>
					{/* <div className={styles.socials}>
						<a
							href='https://instagram.com/garyhtou'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Home;
