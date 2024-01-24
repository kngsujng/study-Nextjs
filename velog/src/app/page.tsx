import Contact from './contact/page';

export default function HomePage() {
	return (
		<div className="flex items-center justify-center w-full max-w-screen-sm mx-auto mt-12 rounded-xl border-2 shadow-xl bg-neutral-50">
			<Contact />
		</div>
	);
}
