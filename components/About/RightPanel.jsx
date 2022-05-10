function RightPanel() {
  return (
    <>
      <div className="flex flex-col gap-6 max-w-3xl px-4">
        <h1 className="text-7xl text-maxDarkGray drop-shadow-sm">Max Lareau</h1>

        <div className="text-xl text-maxDarkGray drop-shadow-sm">
          I am a <strong>passion-driven</strong>, self-taught software engineer
          with a background in IT. Web development and I began a serious
          relationship back in 2019, when I took Colt Steele{"'"}s Web
          Development Boot Camp on Udemy. Previously, I tinkered with Swift and
          Python to solve creative problems in and outside of the workplace.
        </div>

        <div className="max-w-1/2 mt-4">
          <h3 className="text-clamp-lg text-maxDarkGray mb-4 underline underline-offset-2">
            Skills:
          </h3>

          <ol className="grid grid-cols-2 gap-4 h-12 text-clamp-md text-maxDarkGray">
            <li className="flex justify-start items-center">
              <img
                src="/icons/icons8-m365.svg"
                width={64}
                height={64}
                alt="Microsoft 365"
                className="inline mr-4 hover:fill-blue-500"
              />
              <span>Microsoft 365</span>
            </li>

            <li className="flex justify-start items-center">
              <img
                src="/icons/server-svgrepo.svg"
                width={64}
                height={64}
                alt="Server"
                className="inline mr-4"
              />
              <span>Windows Server</span>
            </li>

            <li className="flex justify-start items-center">
              <img
                src="/icons/azure-svgrepo.svg"
                width={64}
                height={64}
                alt="Active Directory"
                className="inline mr-4"
              />
              <span>Windows & Azure AD</span>
            </li>

            <li className="flex justify-start items-center">
              <img
                src="/icons/cloud-svgrepo.svg"
                width={64}
                height={64}
                alt="AWS & Azure"
                className="inline mr-4"
              />
              <span>AWS & Azure</span>
            </li>

            <li className="flex justify-start items-center">
              <img
                src="/icons/powershell-svgrepo.svg"
                width={64}
                height={64}
                alt="PowerShell"
                className="inline mr-4"
              />
              <span>PowerShell</span>
            </li>

            <li className="flex justify-start items-center">
              <img
                src="/icons/python-svgrepo.svg"
                width={64}
                height={64}
                alt="Python"
                className="inline mr-4"
              />
              <span>Python</span>
            </li>

            <li className="flex justify-start items-center">
              <img
                src="/icons/react-svgrepo.svg"
                width={64}
                height={64}
                alt="React logo"
                className="inline mr-4"
              />
              <span>React & Next.js</span>
            </li>

            <li className="flex justify-start items-center">
              <img
                src="/icons/node-js-svgrepo.svg"
                width={64}
                height={64}
                alt="Node js logo"
                className="inline mr-4"
              />
              <span>Node & Express.js</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default RightPanel;
