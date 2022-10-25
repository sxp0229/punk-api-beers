import FilterList from "../FilterList/FilterList";
import SearchBox from "../SearchBox/SearchBox";
import "./Nav.scss"


const Nav = ({ searchTerm, handleInput, onChange, selected, filterCategory } ) => {
 
  return (
    <>
    <div key={filter.id}  className="nav">
      <SearchBox
        label={"Search for Beers"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FilterList 
        onChange={onChange}
        selected={selected}
        category={filterCategory}
      />
    </div>
    </>

  )

}

export default Nav