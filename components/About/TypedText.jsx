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

        <div className='flex justify-center'>
            <div className='absolute w-4/5 bottom-0 pb-5 flex justify-center gap-x-2'>
                <span className="text-2xl font-medium whitespace-nowrap text-maxLightGray">
                    I love
                </span>

                <span className='text-2xl font-bold text-maxLightGray'>
                    <Typewriter
                        options={{
                            strings: typedTextList,
                            autoStart: true,
                            loop: true,
                        }} />
                </span>
            </div>
        </div>
    );
}

export default TypedText;