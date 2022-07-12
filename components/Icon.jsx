import Link from "next/link";
import SVG from "react-inlinesvg";

function Icon({ title, linkTo, src }) {
  return (
    <Link href={linkTo ? linkTo : "maxlareau.com"}>
      <a target="_blank">
        <SVG
          title={title}
          src={src ?? ""}
          className="w-10 h-10 transition-transform hover:scale-125"
        />
      </a>
    </Link>
  );
}

export default Icon;
