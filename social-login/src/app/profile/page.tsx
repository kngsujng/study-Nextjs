import { getServerSession } from 'next-auth/next';
import { authOptions } from './../api/auth/[...nextauth]/route';

export default async function Profilepage() {
	const session = await getServerSession(authOptions);
	const user = session?.user;
	console.log(user);

	return (
		<section className="p-10">
			<p>Profile page입니다</p>
			<h2>반갑습니다, {user && user.name}님!</h2>
		</section>
	);
}
