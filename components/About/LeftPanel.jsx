import TypedText from "./TypedText";
import { Zoom } from "react-awesome-reveal";

function LeftPanel() {
  return (
    <div className="relative w-1/3 h-1/2 min-w-[400px] pt-8 rounded-3xl bg-maxDarkGray bg-opacity-[99%] shadow-md">
      <img
        alt="max portrait"
        className="absolute bottom-24 object-center object-cover pointer-events-none"
        src="/images/me.png"
        layout="fill"
      />
      <TypedText />
    </div>
  );
}

export default LeftPanel;
