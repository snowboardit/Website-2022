import Reveal from 'react-awesome-reveal';
import Icon from '../Icon/Icon';
import { revealFadeUp } from '../../utils/CustomRevealAnimations';

function Project({ project }) {
	return project.status ? (
		<Reveal triggerOnce keyframes={revealFadeUp}>
			<div className="relative sm:min-w-[400px] max-w-lg my-8 sm:my-8 mx-1 sm:mx-10">
				<div className="relative h-full px-4">
					{/* TODO - IMPLEMENT GIF ON IMG HOVER - PREVIEW OF PROJECT/SITE */}
					<a href={project.projectLink}>
						<img
							src={project.thumbnailUrl}
							alt={project.thumbnailAlt}
							className="-mb-48 transition-transform rounded-xl drop-shadow-lg hover:scale-105"
						/>
					</a>
				</div>
				<div className="pt-[24rem] rounded-3xl bg-whiteTrans border-2 border-orange shadow-md">
					<div className="px-4 -mt-48 md:px-6">
						<h1 className="pt-8 pb-4 text-3xl font-medium md:text-4xl">
							<span className="marker-underline-sm">
								{project.title}
							</span>
						</h1>
						{/* Link container */}
						<div className="flex items-center mt-2 mb-4 space-x-4">
							{/* Github Link*/}
							<Icon
								title={'Github repo'}
								linkTo={project.githubLink}
								src={'/icons/icons8-github.svg'}
								width={40}
								height={40}
							/>

							{/* Project Link */}
							<Icon
								title={'Project link'}
								linkTo={project.projectLink}
								src={'/icons/iconmonstr-link.svg'}
								width={30}
								height={30}
							/>
						</div>

						<p className="text-base md:text-xl">
							{project.description}
						</p>
					</div>
					<div className="flex flex-wrap p-3 md:p-6">
						{project.tags &&
							project.tags.map((tag, i) => {
								return (
									<p
										key={i}
										className="inline-block px-2 py-1 mx-1 my-1 text-center transition-colors ease-in-out border-2 cursor-default whitespace-nowrap md:py-2 md:px-4 border-darkBlueSemiTrans bg-blue-400/10 hover:bg-blue-400/0 text-darkBlue drop-shadow-md rounded-2xl"
									>
										{tag.toString()}
									</p>
								);
							})}
					</div>
				</div>
			</div>
		</Reveal>
	) : null;
}

export default Project;
