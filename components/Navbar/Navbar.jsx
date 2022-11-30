import { Link } from "react-scroll";

function Navbar(props) {
    const { atPageTop } = props;

    return (
        <nav className={`fixed top-0 flex p-4 justify-center w-full text-darkBlue z-[4] transition-all duration-300 ${atPageTop ? '' : 'bg-whiteTrans backdrop-blur-sm shadow-sm'}`}>
            <div className="flex justify-between items-center w-[56rem]">
                <Link activeClass="text-darkBlueSemiTrans" to="hero" spy={true} smooth={true} duration={850} className="transition-colors duration-150 hover:cursor-pointer hover:text-darkBlueSemiTrans">
                    <h1 className="text-4xl font-medium marker-underline nowrap">ML</h1>
                </Link>

                <div className="space-x-8">
                    <Link activeClass="text-darkBlueSemiTrans marker-underline nowrap" to="about" spy={true} smooth={true} duration={850} className="text-2xl transition-colors duration-150 hover:cursor-pointer hover:text-darkBlueSemiTrans">
                        About
                    </Link>
                    <Link activeClass="text-darkBlueSemiTrans marker-underline nowrap" to="portfolio" spy={true} smooth={true} duration={850} className="text-2xl transition-colors duration-150 hover:cursor-pointer hover:text-darkBlueSemiTrans">
                        Portfolio
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
