import Image from 'next/image'
import TypedText from './TypedText';

function LeftPanel() {

    const picture_h = 710 * 0.70;
    const picture_w = 525 * 0.70;

    return (

        <>

            <div className='relative w-[400px] h-[500px] rounded-3xl bg-maxDarkGray bg-opacity-[99%] shadow-md'>

                <div className='absolute -top-36 w-[400px] h-[550px]'>
                    <Image alt='max portrait' className='rounded-3xl object-center object-cover pointer-events-none' src='/images/me.png' layout='fill' />
                </div>

                <TypedText />

            </div>
        </>

    );

};

export default LeftPanel;

