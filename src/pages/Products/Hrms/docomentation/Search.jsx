const Search = ({ setShowSearchbar }) => {
  return (
    <>
      <div className=" search-wrapp" onClick={() => setShowSearchbar(false)}>
        <section id="search-container">
          <div className="search-box">
            <input
              type="text"
              id="search-input"
              placeholder="Type to search..."
              autoComplete="off"
            />

            <ul id="result-list" />
          </div>
        </section>
      </div>
      <div className="ovaylay"></div>
    </>
  );
};

export default Search;
