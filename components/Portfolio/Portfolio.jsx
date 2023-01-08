import { Element } from 'react-scroll';
import Project from './Project';

function Portfolio({ projects }) {
	return (
		<Element name="portfolio" className="flex flex-col min-h-screen">
			{/* Title Bar */}
			<div className="relative flex justify-center mt-32 mb-8 text-6xl text-darkBlue xl:text-8xl">
				<span>Portfolio</span>
			</div>

			{/* Projects Container */}
			<div className="flex flex-col items-center justify-center h-full mx-auto my-16 2xl:flex-row 2xl:items-start md:mx-36 text-darkBlue">
				{/* Projects */}
				{projects.map((project, i) => {
					return <Project project={project} key={i} />;
				})}
			</div>
		</Element>
	);
}

export default Portfolio;
