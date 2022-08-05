function FilterBar() {
  return (
    <div className="mx-auto my-10">
      <h3 className="pl-6 py-1 text-dullBlue">
        Powered by <a href="">Keystone JS</a> and <a href="">GraphQL</a>
      </h3>
      <div className="flex max-w-6xl space-x-2 items-center justify-start text-center text-darkBlue align-middle h-16 px-4 py-2 rounded-3xl border-2 border-orange">
        <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
          React
        </button>
        <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
          Next
        </button>
        <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
          Tailwind
        </button>
        <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
          html-css-javascript
        </button>
        <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
          Express
        </button>
        <button className="inline-block py-2 px-4 bg-dullBlue drop-shadow-md rounded-2xl hover:bg-lightBlue transition-colors">
          GraphQL
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
