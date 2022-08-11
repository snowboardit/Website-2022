import Link from "next/link";
import { useEffect, useState } from "react";

function FilterBar({ projects }) {
  const [tags, setTags] = useState([]);

  // Load all tags into state on startup
  useEffect(() => {
    if (tags.length === 0) {
      let tagsCache = [];

      projects.map((project) => {
        project.tags.map((tag, i) => {
          console.log(`project tag - #${i}:\n`, tag.name);
          if (!tagsCache.includes(tag.name)) {
            setTags((oldTags) => [...oldTags, tag.name]);
            console.log(`pushed tag ${tag.name} to tags array`);
          }
          tagsCache.push(tag.name); // log to cache
          console.log(`Pushed ${tag.name} to tagsCache`);
        });
      });
    }
  }, []);

  if (!tags) return <h1>Loading...</h1>;

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
        {tags.map((tag, i) => {
          return (
            <button
              key={i}
              className="inline-block my-1 mx-1 py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors"
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBar;
