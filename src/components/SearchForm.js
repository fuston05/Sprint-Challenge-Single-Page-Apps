import React from "react";
import { FormLabel, FormInput } from './styles';

export default function SearchForm(props) {

  //functions
  function handleChange(e) {
    props.setSearchTerm(e.target.value);
  }//end func

  return (
    <section className="search-form">
      <form>
        <FormLabel>Search By Name:
          <FormInput
            value={props.searchTerm}
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </FormLabel>
      </form>
    </section>
  );
}
