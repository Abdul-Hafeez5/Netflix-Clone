import React from "react";
import Card from "./Card";

const Row = ({ title, movieArray = [] }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {movieArray.map((item, index) => (
          <Card img={`${imageUrl}/${item.poster_path}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Row;
