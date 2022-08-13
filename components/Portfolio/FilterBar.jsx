import Link from "next/link";

function FilterBar({ tags, setTags }) {
  // handle tag toggle
  function handleTagClick(e) {
    if (!tags) return;

    setTags((oldTags) => {
      return [
        ...oldTags.map((tag, i) => {
          if (e.target.name === tag.name) {
            return {
              name: tag.name,
              selected: !tag.selected,
            };
          }
          return tag;
        }),
      ];
    });
  }

  if (!tags)
    return <h1 className="text-white text-2xl text-center">Loading tags...</h1>;

  return (
    <div className="mx-auto my-10">
      <h3 className="pl-6 py-1 text-dullBlue">
        Powered by{" "}
        <Link href="https://keystonejs.com/">
          <a className="hover:text-lightBlue" rel="noreferrer noopener">
            Keystone JS
          </a>
        </Link>{" "}
        and{" "}
        <Link href="https://graphql.org/">
          <a className="hover:text-lightBlue" rel="noreferrer noopener">
            GraphQL
          </a>
        </Link>
      </h3>

      <div className="flex flex-wrap max-w-6xl items-center justify-start text-center text-darkBlue align-middle px-4 py-2 rounded-3xl border-2 border-orange">
        {/* {console.log("TAGS LOADED:\n", tags)} */}
        {tags.map((tag, i) => {
          return (
            <button
              key={i}
              name={tag.name}
              onClick={handleTagClick}
              className={`inline-block my-1 mx-1 py-2 px-4 drop-shadow-md rounded-2xl transition-colors ${
                tag.selected
                  ? "bg-orange hover:bg-lightOrange active:bg-orange"
                  : "bg-dullBlue hover:bg-lightBlue active:bg-orange"
              }`}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBar;
