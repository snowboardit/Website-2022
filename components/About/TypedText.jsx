import Typewriter from 'typewriter-effect';

function TypedText() {
	const typedTextList = [
		'engineering IT systems',
		'React & Next.js',
		'Node & Express.js',
		'engineering audio/video systems',
		'piloting gliders & airplanes',
		'listening to all kinds of music',
		'snowboarding (with friends!)',
		'building with cutting-edge tech',
		'understanding how things work',
	];

	return (
		<div className="flex justify-start p-4 xl:p-8 space-x-2">
			<span className="text-2xl font-medium whitespace-nowrap text-maxLightGray">
				I love
			</span>

			<span className="text-2xl font-bold text-maxLightGray">
				<Typewriter
					options={{
						strings: typedTextList,
						autoStart: true,
						loop: true,
					}}
				/>
			</span>
		</div>
	);
}

export default TypedText;
