import { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import MainPanel from '../../components/MainPanel/MainPanel'
import "./Main.scss"

const Main = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvSelected, setAbvSelected] = useState(false);
  const [classicSelected, setClassicSelected] = useState(false);
  const [phSelected, setPhSelected] = useState(false);

  // gettting beers from API
  const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

  const getBeersData = async () => {
    let res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeersData();
  }, []);

  // Setting up the search box
  const handleInput = (event) => {
    const cleanInput=event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }
  
  const abv = (event) => {
    setAbvSelected(!abvSelected);
  }
  const classic = (event) => {
    setClassicSelected(!classicSelected);
  }
  const ph = (event) => {
    setPhSelected(!phSelected);
  }

  const filteredBeers = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    const beerDescLower = beer.description.toLowerCase();
    // console.log("in filteredBeers: is abv checked =", abvSelected);
    // console.log("in filteredBeers: is classic checked =", classicSelected);
    // console.log("in filteredBeers: is ph checked =", phSelected);

    const brewYear = Number(beer.first_brewed.slice(-4));

    return (
      (beerNameLower.includes(searchTerm) || beerDescLower.includes(searchTerm)) 
      && (abvSelected ? beer.abv > 6 : true) 
      && (classicSelected ? brewYear <= 2010 : true) 
      && (phSelected ? parseFloat(beer.ph) < 4 : true)
    )
  });

  return (
    <>
      <Nav 
        searchTerm={searchTerm}
        handleInput={handleInput}
        abvSelected={abv}
        classicSelected={classic}
        phSelected={ph}
      />
      {filteredBeers.length > 0 ? (<MainPanel beers={filteredBeers}/>) : (<h2 className="no-results">There are no beers that match your criteria</h2>)}
    </>
  )
}

export default Main