import { Link } from 'react-scroll';
import { Slide } from 'react-awesome-reveal';
import { revealFadeDown } from '../../utils/CustomRevealAnimations';

function Navbar(props) {
	const { atPageTop } = props;

	return (
		<Slide
			triggerOnce
			keyframes={revealFadeDown}
			delay={300}
			className={`fixed top-0 flex p-4 justify-center w-full text-darkBlue z-[4] transition-all duration-300 ${
				atPageTop ? '' : 'bg-whiteTrans backdrop-blur-sm shadow-sm'
			}`}
		>
			<nav className="flex justify-between items-center w-[56rem]">
				<Link
					activeClass="text-darkBlueSemiTrans"
					to="hero"
					spy={true}
					smooth={true}
					duration={850}
					className="transition-colors duration-150 hover:cursor-pointer hover:text-darkBlueSemiTrans"
				>
					<h1 className="text-3xl font-medium sm:text-4xl marker-underline nowrap">
						ML
					</h1>
				</Link>

				<div className="space-x-4 sm:space-x-8">
					<Link
						activeClass="text-darkBlueSemiTrans marker-underline nowrap"
						to="about"
						spy={true}
						smooth={true}
						duration={850}
						className="text-xl transition-colors duration-150 sm:text-2xl hover:cursor-pointer hover:text-darkBlueSemiTrans"
					>
						About
					</Link>
					<Link
						activeClass="text-darkBlueSemiTrans marker-underline nowrap"
						to="portfolio"
						spy={true}
						smooth={true}
						duration={850}
						className="text-xl transition-colors duration-150 sm:text-2xl hover:cursor-pointer hover:text-darkBlueSemiTrans"
					>
						Portfolio
					</Link>
					<Link
						activeClass="text-darkBlueSemiTrans marker-underline nowrap"
						to="contact"
						spy={true}
						smooth={true}
						duration={850}
						className="text-xl transition-colors duration-150 sm:text-2xl hover:cursor-pointer hover:text-darkBlueSemiTrans"
					>
						Contact
					</Link>
				</div>
			</nav>
		</Slide>
	);
}

export default Navbar;
