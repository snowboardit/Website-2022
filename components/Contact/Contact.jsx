import { Element } from 'react-scroll';
import SVG from 'react-inlinesvg';

const Contact = () => {
	return (
		<Element
			id="contact"
			className="flex flex-col items-center justify-center h-screen text-center text-darkBlue whiteTransGradient"
		>
			<div className="sm:max-w-xl">
				<h2 className="mb-8 text-5xl md:mb-12 md:text-8xl marker-underline">
					Get in touch!
				</h2>
				<p className="mx-2 mb-8 text-base md:mx-0 md:mb-8 md:text-2xl">
					Thanks for checking out my website! If you have a project in
					mind or would like to discuss potential collaboration,
					please don't hesitate to get in touch. Click the button
					below to send me an email through your default email client.
				</p>
				<a
					className="inline-block px-5 py-3 text-lg font-medium text-white transition-transform rounded-md md:py-4 md:px-8 bg-darkBlueSemiTrans text-decoration-none fill-darkBlueSemiTrans hover:scale-110"
					href="mailto:info@maxlareau.com"
				>
					<SVG
						title="email me"
						src="/icons/email-svgrepo.svg"
						width={24}
						height={24}
						fill="white"
						className="inline-block mr-4"
					/>
					<span className="align-middle">Email Me</span>
				</a>
			</div>
		</Element>
	);
};

export default Contact;
