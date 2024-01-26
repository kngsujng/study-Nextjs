'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
	const { data: session } = useSession();
	const user = session?.user;
	return (
		<nav className="flex justify-between items-center p-4 border-b-2 shadow-md">
			<Link href="/">
				<h1 className="font-bold text-lg">Header</h1>
			</Link>
			<ul className="flex items-center gap-4">
				{user && <li>{user.name}님, 어서오세요!</li>}
				{user && (
					<Link
						href="/profile"
						className="ml-4 hover:border-2 hover:border-blue-500 rounded-full"
					>
						<li>
							{/*eslint-disable-next-line @next/next/no-img-element*/}
							<img
								className="w-8 rounded-full"
								src={`${user.image}`}
								alt="user image"
							/>
						</li>
					</Link>
				)}
				<li>
					{session ? (
						<button
							className="bg-blue-400 p-2 rounded-md"
							onClick={() => signOut()}
						>
							로그아웃
						</button>
					) : (
						<button
							onClick={() => signIn()}
							className="bg-blue-400 p-2 rounded-md"
						>
							로그인
						</button>
					)}
				</li>
			</ul>
		</nav>
	);
}
