import SocialLoginBtn from '../components/SocialLoginBtn';

export default function LoginPage() {
	return (
		<section className="flex flex-col items-center mx-auto mt-[15%] px-10 w-1/6 min-w-80 h-80 text-center border-2 border-gray-200 rounded-lg shadow-xl">
			<div>
				<h2 className="font-bold text-2xl mt-10">Sign-in</h2>
				<p className="mt-3">지금 바로 로그인하세요!</p>
			</div>
			<SocialLoginBtn />
		</section>
	);
}
