function RightPanel() {
  return (
    <section className="flex flex-col space-y-8 w-full max-w-2xl text-4xl leading-tight text-left text-darkBlue">
      <h1 className="text-8xl mb-4">
        Hi! I&apos;m <span className="marker-underline">Max</span>.
      </h1>
      <p>
        I&apos;ve been exploring and tinkering with computers for{" "}
        <span className="marker-underline-md">15+ years</span>.
      </p>
      <p>
        I&apos;m a <span className="marker-underline-md">web developer</span>{" "}
        focused on building quality websites with React, Next.js, and
        TypeScript.
      </p>
      <p>
        I also{" "}
        <span className="marker-underline-md">
          build and maintain IT systems
        </span>{" "}
        and networks when I&apos;m not working on the web.
      </p>
      <p>
        ...or <span className="marker-underline-md">flying airplanes</span>!
      </p>
    </section>
  );
}

export default RightPanel;
