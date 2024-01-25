'use client';

import { FaGithub } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { signIn } from 'next-auth/react';

const socials = [
	{ icon: <FaGithub />, name: '깃허브' },
	{ icon: <SiNaver />, name: '네이버' },
	{ icon: <RiKakaoTalkFill />, name: '카카오' },
];

export default function SocialLoginBtn() {
	return (
		<div className="mt-10 flex flex-col gap-2">
			{socials.map((social, idx) => (
				<button
					key={idx}
					onClick={() => signIn()}
					className="flex items-center gap-4 bg-black text-md text-white p-2 px-3 rounded-md"
				>
					{social.icon} {social.name}로 로그인
				</button>
			))}
		</div>
	);
}
