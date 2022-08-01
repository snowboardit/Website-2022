import SVG from "react-inlinesvg";

function LogoCarousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <SVG
            src="/icons/azure-svgrepo.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
        <div className="slide">
          <SVG
            src="/icons/icons8-github.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
        <div className="slide">
          <SVG
            src="/icons/icons8-m365.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
        <div className="slide">
          <SVG
            src="/icons/icons8-python.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
        <div className="slide">
          <SVG
            src="/icons/node-js-svgrepo.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
        <div className="slide">
          <SVG
            src="/icons/powershell-svgrepo.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
        <div className="slide">
          <SVG
            src="/icons/react-svgrepo.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
        <div className="slide">
          <SVG
            src="/icons/tailwind-logo.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
        <div className="slide">
          <SVG
            src="/icons/server-svgrepo.svg"
            height="100"
            width="100"
            alt=""
            className="fill-lightBlue"
          />
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;
