import React from "react";
import "./BeerTiles.scss";

const BeerTiles = (props) => {
  const { beersArr } = props;

  const beerListJSX = beersArr.map((beer) => (
    <div className="beer-tile">
      <div className="img-container">
        <img
          className="beer-tile__img"
          src={beer.image_url}
          alt={beer.name}
          key={beer.id}
        />
      </div>
      <h2>{beer.name}</h2>
      <p className="beer-tile__tag">{beer.tagline}</p>
      <p className="beer-tile__desc">{beer.description}</p>
      <p className="beer-tile__abv">ABV: {beer.abv}</p>
      <p className="beer-tile__ph">pH: {beer.ph}</p>
      <p className="beer-tile__brewdate">First Brewed: {beer.first_brewed}</p>
    </div>
  ));

  return (
    <>
      <div className="all-beer-tiles">{beerListJSX}</div>
    </>
  );
};

export default BeerTiles;
