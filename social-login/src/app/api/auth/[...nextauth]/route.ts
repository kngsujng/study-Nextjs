import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_ID || '',
			clientSecret: process.env.KAKAO_SECRET || '',
		}),
		NaverProvider({
			clientId: process.env.NAVER_ID || '',
			clientSecret: process.env.NAVER_SECRET || '',
		}),
	],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
