

function RightPanel() {
    return (
        <>
            <div className="flex flex-col gap-6 h-2/5 max-w-3xl">

                <h1 className="text-7xl text-maxDarkGray drop-shadow-sm">
                    Max Lareau
                </h1>

                <div className="text-xl text-maxDarkGray drop-shadow-sm">
                    I am a <strong>passion-driven</strong>, self-taught software engineer with a background in IT. Web development and I began a serious relationship back in 2019, when I took Colt Steele{"'"}s Web Development Boot Camp on Udemy. Previously, I tinkered with Swift and Python to solve creative problems in and outside of the workplace.
                </div>

                <div className="max-w-md mt-4">
                    <h3 className="text-3xl text-maxDarkGray mb-4 underline underline-offset-2">Skills:</h3>

                    <ol className="grid grid-cols-2 gap-2 h-12 text-xl text-maxDarkGray">
                        <li>• Microsoft 365</li>
                        <li>• Windows Server</li>
                        <li>• {'Windows & Azure AD'}</li>
                        <li>• {'AWS & Azure Clouds'}</li>
                        <li>• PowerShell</li>
                        <li>• Python</li>
                        <li>• {'React & Next.js'}</li>
                        <li>• {'Node & Express.js'}</li>
                    </ol>
                </div>

            </div>
        </>

    );
}

export default RightPanel;