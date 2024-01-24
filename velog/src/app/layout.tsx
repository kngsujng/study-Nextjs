import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const noToSans = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Velog',
	description: 'velog용 프로젝트',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={noToSans.className}>
			<body>{children}</body>
		</html>
	);
}
