import FilterList from "../FilterList/FilterList";
import SearchBox from "../SearchBox/SearchBox";
import "./Nav.scss"


const Nav = ({ searchTerm, handleInput, abvSelected, phSelected, classicSelected } ) => {
 
  return (
    <>
    <div className="nav">
      <SearchBox
        label={"Search for Beers"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FilterList 
        abvSelected={abvSelected}
        classicSelected={classicSelected}
        phSelected={phSelected}
      />
    </div>
    </>

  )

}

export default Nav