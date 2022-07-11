import TypedText from "./TypedText";
// import { Zoom } from "react-awesome-reveal";

function LeftPanel() {
  return (
    <div className="relative flex-col max-w-[400px] xl:max-w-[500px] xl:mx-16">
      <div className="h-full -mb-96">
        <img
          alt="max portrait"
          className="rounded-b-xl pointer-events-none"
          src="/images/me.png"
          layout="fill"
        />
      </div>
      <div className="rounded-3xl bg-maxDarkGray bg-opacity-[99%] shadow-md pt-96">
        <TypedText />
      </div>
    </div>
  );
}

export default LeftPanel;
