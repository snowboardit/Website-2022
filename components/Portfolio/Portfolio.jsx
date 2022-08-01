import SVG from "react-inlinesvg";

function Portfolio() {
  return (
    <section className="flex flex-col min-h-screen bg-darkBlue">
      {/* Filter Bar */}
      <div className="mx-auto my-10">
        <h3 className="pl-6 py-1 text-dullBlue">
          Powered by Github GraphQL API
        </h3>
        <div className="flex max-w-6xl space-x-2 items-center justify-start text-center text-darkBlue align-middle h-16 px-4 py-2 rounded-3xl border-2 border-orange">
          <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
            React
          </button>
          <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
            Next
          </button>
          <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
            Tailwind
          </button>
          <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
            html-css-javascript
          </button>
          <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
            Express
          </button>
          <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
            GraphQL
          </button>
        </div>
      </div>

      {/* Projects */}
      {/* Container */}
      <div className="flex flex-col 2xl:flex-row justify-center items-center 2xl:items-start space-y-16 2xl:space-y-4 2xl:space-x-16 min-h-screen mx-36 my-16 text-darkBlue">
        {/* Children */}
        <div className="relative min-w-[400px] max-w-lg">
          <div className="h-full px-4">
            <img
              src="/images/max-website.png"
              alt="max website thumbnail"
              className="-mb-48 rounded-xl drop-shadow-lg"
            />
          </div>
          <div className="pt-[24rem] rounded-3xl bg-dullBlue border-2 border-orange shadow-md">
            <div className="px-6 -mt-48">
              <h1 className="text-4xl font-semibold pt-8 pb-4">
                <span className="marker-underline-sm">Website Refresh</span>
              </h1>
              <p className="text-xl">
                You are looking at it! With the goal of displaying my skills and
                portfolio at the same time, I brought this site to life from
                Figma design to code and deployment via Netlify.
              </p>
            </div>
            <div className="mt-4 p-6">
              <p className="inline-block py-2 px-4 bg-darkBlue hover:bg-lightBlue text-white hover:text-darkBlue font-thin hover:font-normal drop-shadow-md rounded-2xl cursor-default transition-colors">
                React
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-w-[400px] max-w-lg">
          <div className="h-full px-4">
            <img
              src="/images/max-website.png"
              alt="max website thumbnail"
              className="-mb-48 rounded-xl drop-shadow-lg"
            />
          </div>
          <div className="pt-[30rem] rounded-3xl bg-dullBlue border-2 border-orange shadow-md">
            <div className="px-6 -mt-72">
              <h1 className="text-4xl font-semibold pt-8 pb-4">
                <span className="marker-underline-sm">Website Refresh</span>
              </h1>
              <p className="text-xl">
                You are looking at it! With the goal of displaying my skills and
                portfolio at the same time, I brought this site to life from
                Figma design to code and deployment via Netlify.
              </p>
            </div>
            <div className="mt-4 p-6">
              <p className="inline-block py-2 px-4 bg-darkBlue hover:bg-lightBlue text-white hover:text-darkBlue font-thin hover:font-normal drop-shadow-md rounded-2xl cursor-default transition-colors">
                React
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-w-[400px] max-w-lg">
          <div className="h-full px-4">
            <img
              src="/images/max-website.png"
              alt="max website thumbnail"
              className="-mb-48 rounded-xl drop-shadow-lg"
            />
          </div>
          <div className="pt-[30rem] rounded-3xl bg-dullBlue border-2 border-orange shadow-md">
            <div className="px-6 -mt-72">
              <h1 className="text-4xl font-semibold pt-8 pb-4">
                <span className="marker-underline-sm">Website Refresh</span>
              </h1>
              <p className="text-xl">
                You are looking at it! With the goal of displaying my skills and
                portfolio at the same time, I brought this site to life from
                Figma design to code and deployment via Netlify.
              </p>
            </div>
            <div className="mt-4 p-6">
              <p className="inline-block py-2 px-4 bg-darkBlue hover:bg-lightBlue text-white hover:text-darkBlue font-thin hover:font-normal drop-shadow-md rounded-2xl cursor-default transition-colors">
                React
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Logo Carousel */}
      <div class="slider">
        <div class="slide-track">
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
    </section>
  );
}

export default Portfolio;
