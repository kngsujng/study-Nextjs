import SocialLoginBtn from '@/app/components/SocialLoginBtn';
import { authOptions } from '../[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';

// next-auth 커스텀 페이지
export default async function SignInPage() {
	const session = await getServerSession(authOptions);
	if (session) {
		return { redirect: { destination: '/' } };
	}
	const providers = (await getProviders()) ?? {};
	return (
		<section className="flex flex-col items-center mx-auto mt-[10%] px-10 w-1/6 min-w-80 h-80 text-center border-2 border-gray-200 rounded-lg shadow-xl">
			<div>
				<h2 className="font-bold text-2xl mt-10">Sign-in</h2>
				<p className="mt-3">지금 바로 로그인하세요!</p>
			</div>
			<SocialLoginBtn providers={providers} />
		</section>
	);
}
