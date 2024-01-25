import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthContext from '@/context/AuthContex';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '소셜 로그인',
	description: 'Next-auth를 이용한 소셜 로그인 구현',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContext>
					<Header />
					<main>{children}</main>
				</AuthContext>
			</body>
		</html>
	);
}
