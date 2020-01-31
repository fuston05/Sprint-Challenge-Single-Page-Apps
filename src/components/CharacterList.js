import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchFrom from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setData(res.data.results);
        setSearchResults(res.data.results);
      })
      .catch(err => { console.log(err); })
  }, []);

  useEffect(() => {

    const results = data.filter(ele => {
      return ele.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchResults(results);
  }, [searchTerm, data])

  return (
    <section className="character-list">
      <SearchFrom setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      {
        searchResults.map(ele => {
          return <CharacterCard key={ele.id} character={ele} />
        })
      }
    </section>
  );
}
