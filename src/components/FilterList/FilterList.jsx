import "./FilterList.scss"
import FilterItem from "../FilterItem/FilterItem";


const FilterList = ({abvSelected, phSelected, classicSelected}) => {
 
  const categories = [
    "High ABV (>6.0%)",
    "Classic Range",
    "Acidic (pH <4)"
  ]
  return (
    <div className="punk-api__nav__filters">
      <FilterItem onChange={abvSelected} filterName={categories[0]}/>
      <FilterItem onChange={classicSelected} filterName={categories[1]}/>
      <FilterItem onChange={phSelected} filterName={categories[2]}/>
  </div>
  )
 
};

export default FilterList;
