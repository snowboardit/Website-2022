import TypedText from "./TypedText";
// import { Zoom } from "react-awesome-reveal";

function LeftPanel() {
  return (
    <div className="flex-col max-w-[400px] xl:max-w-[500px] xl:mx-16 rounded-3xl bg-maxDarkGray bg-opacity-[99%] shadow-md">
      <img
        alt="max portrait"
        className="pointer-events-none"
        src="/images/me.png"
        layout="fill"
      />
      <TypedText />
    </div>
  );
}

export default LeftPanel;
