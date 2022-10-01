import Link from "next/link";
import SVG from "react-inlinesvg";

function Icon({ title, linkTo, src, width, height }) {
  return (
    <Link href={linkTo ? linkTo : "maxlareau.com"}>
      <a target="_blank">
        <SVG
          title={title}
          src={src ?? ""}
          className="fill-darkBlueSemiTrans transition-transform hover:scale-125"
          width={width ?? null}
          height={height ?? null}
        />
      </a>
    </Link>
  );
}

export default Icon;
