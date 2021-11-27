/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['garytou.com', 'assets.garytou.com', '*.garytou.com'],
	},
	assetPrefix: isProd ? '/home' : '',
	rewrites: [
		{
			source: '/home/_next/:path*',
			destination: '/_next/:path*',
		},
	],
};
