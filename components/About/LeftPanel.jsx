import TypedText from "./TypedText";

function LeftPanel() {
  return (
    <>
      <div className="relative w-1/2 h-3/5 min-w-[400px] pt-8 rounded-3xl bg-maxDarkGray bg-opacity-[99%] shadow-md">
        <img
          alt="max portrait"
          className="absolute bottom-24 object-center object-cover pointer-events-none"
          src="/images/me.png"
          layout="fill"
        />
        <TypedText />
      </div>
    </>
  );
}

export default LeftPanel;
