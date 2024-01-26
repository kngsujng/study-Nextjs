'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

type Props = {
	providers: Record<string, ClientSafeProvider>;
};

export default function SocialLoginBtn({ providers }: Props) {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl') as string;
	return (
		<div className="mt-10 flex flex-col gap-2">
			{Object.values(providers).map((provider) => (
				<button
					key={provider.name}
					onClick={() => signIn(provider.id, { callbackUrl })}
					className="flex items-center justify-center gap-4 bg-black text-md text-white p-2 px-3 rounded-md"
				>
					{provider.name}로 로그인
				</button>
			))}
		</div>
	);
}
