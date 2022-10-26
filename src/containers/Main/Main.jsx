import { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import MainPanel from '../../components/MainPanel/MainPanel'

const Main = () => {
//  const {beers} = props;
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvSelected, setAbvSelected] = useState(false);
  const [classicSelected, setClassicSelected] = useState(false);
  const [phSelected, setPhSelected] = useState(false);
  // const [filterArr, setFilterArr] = useState(initFiltArr);

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
  
  // Setting up the filter

  // const initFiltArr = [
  //   {id: 1, category: "High ABV (>6.0%)", checked: false, cond: "abv_gt=6"},
  //   {id: 1, category: "Classic Range", checked: false, cond: "brewed_before=01-2010"},
  //   {id: 1, category: "Acidic (pH <4)", checked: false, cond: "pH <= 4"}
  // ]
  
  //useEffect(() => getBeersArr(), [filterArr, searchTerm])
  const abv = (event) => {
    console.log("in high abv checked = ", abvSelected);
    setAbvSelected(!abvSelected);
    console.log("in high abv checked =", abvSelected);
  }
  const classic = (event) => {
    console.log("in classic");
    setClassicSelected(!classicSelected);
    // console.log("Classic: "+ event.target.checked);
  }
  const ph = (event) => {
    console.log("acidic");
    setPhSelected(!phSelected);
    // console.log("pH: "+ event.target.checked);
  }

  const filteredBeers = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    const beerDescLower = beer.description.toLowerCase();
    console.log("in filteredBeers: is abv checked =", abvSelected);
    console.log("in filteredBeers: is classic checked =", classicSelected);
    console.log("in filteredBeers: is ph checked =", phSelected);

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
      <MainPanel beers={filteredBeers}/>    
    </>
  )
}

export default Main