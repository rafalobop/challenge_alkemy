import React from 'react';
import '../css/search.css';

const HeroSearch = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese el nombre de su heroe o villano..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default HeroSearch;
