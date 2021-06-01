import React from 'react';

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
          placeholder="Heroe o villano..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default HeroSearch;
