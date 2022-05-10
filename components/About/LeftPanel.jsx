import TypedText from "./TypedText";

function LeftPanel() {
  return (
    <>
      <div className="relative w-[400px] h-[500px] rounded-3xl bg-maxDarkGray bg-opacity-[99%] shadow-md">
        <img
          alt="max portrait"
          className="absolute -top-36 object-center object-cover pointer-events-none"
          src="/images/me.png"
          layout="fill"
        />
        <TypedText />
      </div>
    </>
  );
}

export default LeftPanel;
