import { createClient } from 'next-sanity';
import LogRocket from 'logrocket';

import Background from '../components/Background/Background';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import LogoCarousel from '../components/Portfolio/LogoCarousel';
import Contact from '../components/Contact/Contact';

// INIT LOG ROCKET
LogRocket.init('fny2je/max-website');

// INIT SANITY
const client = createClient({
	projectId: '0px9go5b',
	dataset: 'production',
	apiVersion: '2022-09-30',
	useCdn: false,
});

export default function Home({ projects }) {
	return (
		<>
			<Head>
				<title>ML</title>
				<meta name="description" content="Max's Website" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-touch-icon.png"
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				></link>
				<link rel="manifest" href="/site.webmanifest"></link>
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				></link>
				<meta name="msapplication-TileColor" content="#da532c"></meta>
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
			<main className={`flex flex-col w-full`}>
				<Background />

				<About />

				<LogoCarousel />

				<Portfolio projects={projects} />

				<Contact />
			</main>
		</>
	);
}

export async function getStaticProps() {
	let projects = await client.fetch(`*[_type == "project"]`);

	const projectsData = projects.map((project) => {
		// image-289cdb2925eead022ad635b2748db496b11595f8-1439x806-png -- what we are given
		// https://cdn.sanity.io/images/0px9go5b/production/289a46c54633f8dd0646364b10ca36aeae5d0be4-1920x1081.png -- target
		const thumbnailUrlParts = project.thumbnail.asset._ref.split('-');

		let projectTags = [];
		if (project.tags) {
			project.tags.map((tag) => {
				projectTags.push(tag.value);
			});
		}

		return {
			title: project.title,
			status: project.isPublished,
			description: project.description,
			githubLink: project.githubLink,
			projectLink: project.projectLink,
			thumbnailUrl: `https://cdn.sanity.io/images/0px9go5b/production/${thumbnailUrlParts[1]}-${thumbnailUrlParts[2]}\.${thumbnailUrlParts[3]}`,
			thumbnailAlt: project.thumbnailAlt,
			tags: projectTags,
		};
	});

	return {
		props: {
			projects: projectsData,
		},
	};
}
