import Image from 'next/image'
import Link from 'next/link'

function Icon({ linkTo, src }) {
    return (
        <Link href={linkTo ? linkTo : 'Empty URL'} >
            <a target="_blank">
                <Image className="drop-shadow-sm transition-all hover:scale-110 hover:drop-shadow-md" src={src ? src : ''} height={32} width={32} />
            </a>
        </Link>
    );
}

export default Icon;