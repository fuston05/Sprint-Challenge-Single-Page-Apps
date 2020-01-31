import React from "react";

export default function SearchForm(props) {

  //functions
  function handleChange(e) {
    props.setSearchTerm(e.target.value);
    // console.log(e.target.value);
  }//end func

  return (
    <section className="search-form">
      <form>
        <label>Search:
          <input
            value={props.searchTerm}
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </label>
      </form>
    </section>
  );
}
