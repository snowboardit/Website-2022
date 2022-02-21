import Typewriter from 'typewriter-effect';

function TypedText() {

    const typedTextList = [
        '',
        'engineering IT systems',
        'React & Next.js',
        'Node & Express.js',
        'engineering audio/video systems',
        'piloting gliders & airplanes',
        'listening to all kinds of music',
        'snowboarding (with friends!)',
        'building stuff with new and innovative tech!'
    ]

    return (
        <>
            <span className="text-2xl whitespace-nowrap text-gray-300">
                I love
            </span>

            <span className='font-bold text-2xl text-[#68b8d7]'>
                <Typewriter
                    options={{
                        strings: typedTextList,
                        autoStart: true,
                        loop: true,
                    }} />
            </span>
        </>
    );
}

export default TypedText;