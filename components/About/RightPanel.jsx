import SVG from "react-inlinesvg";

function RightPanel() {
  return (
    <>
      <h1 className="text-7xl text-maxDarkGray text-left font-semibold w-full drop-shadow-sm mb-6">
        Max Lareau
      </h1>

      <div className="text-xl text-maxDarkGray drop-shadow-sm mb-12">
        I am a <strong>passion</strong>-driven systems engineer with 15+ years
        of computer experience in Windows and Unix-based operating systems. From
        building, maintaining, and troubleshooting enterprise-grade IT systems
        to writing code for one of my side projects, I am always learning
        something new to improve my skillset and become a more valuable worker.
      </div>

      <div className="w-full">
        <h3 className="text-clamp-lg font-semibold text-center sm:text-left text-maxDarkGray">
          Skills:
        </h3>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4 text-clamp-md text-maxDarkGray">
          <li className="flex justify-center sm:justify-start items-center">
            <SVG
              src="/icons/icons8-m365.svg"
              title="Microsoft 365 logo"
              className="mr-4 fill-maxDarkGray hover:fill-blue-500 w-12 h-12"
            />
            <span className="text-xl">Microsoft 365</span>
          </li>

          <li className="flex justify-start items-center">
            <SVG
              src="/icons/server-svgrepo.svg"
              title="Server logo"
              className="mr-4 fill-maxDarkGray hover:fill-blue-500 w-12 h-12"
            />
            <span className="text-xl">Windows Server</span>
          </li>

          <li className="flex justify-start items-center">
            <SVG
              src="/icons/azure-svgrepo.svg"
              title="Azure AD Logo"
              className="mr-4 fill-maxDarkGray hover:fill-blue-500 w-12 h-12"
            />
            <span className="text-xl">Windows &amp; Azure AD</span>
          </li>

          <li className="flex justify-start items-center">
            <SVG
              src="/icons/cloud-svgrepo.svg"
              title="Cloud icon"
              className="mr-4 fill-maxDarkGray hover:fill-blue-500 w-12 h-12"
            />
            <span className="text-xl">AWS &amp; Azure</span>
          </li>

          <li className="flex justify-start items-center">
            <SVG
              src="/icons/powershell-svgrepo.svg"
              title="PowerShell icon"
              className="mr-4 fill-maxDarkGray hover:fill-blue-500 w-12 h-12"
            />
            <span className="text-xl">PowerShell</span>
          </li>

          <li className="flex justify-start items-center">
            <SVG
              src="/icons/icons8-python.svg"
              title="Python Logo"
              className="mr-4 fill-maxDarkGray hover:fill-blue-500 w-12 h-12"
            />
            <span className="text-xl">Python</span>
          </li>

          <li className="flex justify-start items-center">
            <SVG
              src="/icons/react-svgrepo.svg"
              title="React Logo"
              className="mr-4 fill-maxDarkGray hover:fill-blue-500 w-12 h-12"
            />
            <span className="text-xl">React &amp; Next.js</span>
          </li>

          <li className="flex justify-start items-center">
            <SVG
              src="/icons/node-js-svgrepo.svg"
              title="Node JS Logo"
              className="mr-4 fill-maxDarkGray hover:fill-blue-500 w-12 h-12"
            />
            <span className="text-xl">Node &amp; Express.js</span>
          </li>
        </ol>
      </div>
    </>
  );
}

export default RightPanel;
