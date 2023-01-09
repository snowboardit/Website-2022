import SVG from 'react-inlinesvg';
import useWindowSize from '../../hooks/useWindowSize';
import isMobile from '../../utils/isMobile';

function LogoCarousel() {
	const {width} = useWindowSize();

	const calcImageSize = (width) => {
		return isMobile(width) ? 50 : 100;
	}

	return (
		<div className={isMobile(width) ? "slider slider-sm" : "slider"}>
			<div className="slide-track">
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/AWS.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="amazon web services logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Azure.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="azure"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Github.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="github logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/GraphQL.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="graphql logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/JavaScript.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="javascript logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Linux.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="linux penguin"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/MongoDB.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="mongo db logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Office365.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="office 365 logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Postgres.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="postgres logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/PowerShell.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="powershell logo"
						title=""
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Python.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="python"
						title=""
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/React.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="react"
						title=""
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/TailwindCSS.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="tailwind css logo"
						title=""
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/TypeScript.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="typescript logo"
						title=""
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Windows.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="windows logo"
						title=""
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Ubuntu.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="windows logo"
						title=""
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/AWS.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="amazon web services logo"
						title=""
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Azure.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="azure"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Github.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="github logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/GraphQL.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="graphql logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/JavaScript.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="javascript logo"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/Linux.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="linux penguin"
					/>
				</div>
				<div className={isMobile(width) ? "slide slide-sm" : "slide"}>
					<SVG
						src="/icons/carousel/MongoDB.svg"
						height={calcImageSize(width)}
						width={calcImageSize(width)}
						alt="mongo db logo"
					/>
				</div>
			</div>
		</div>
	);
}

export default LogoCarousel;
