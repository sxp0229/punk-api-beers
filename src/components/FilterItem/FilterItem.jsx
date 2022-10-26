import React from 'react'
import './FilterItem.scss'

const FilterItem = (props) => {
  const {onChange, filterName} = props;
  
  return (
    <section className="filters">
    <header id="filters-header">Filters</header>
    <ul>
        <li className="filter-item" key={filterName}>
          <label>
            <input
              onChange={onChange}
              type="checkbox"
              value={filterName}
            />
            {filterName}
          </label>
        </li>
    </ul>
  </section>
  )
}

export default FilterItem