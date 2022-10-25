import { useState } from "react";
import "./FilterList.scss"


const FilterList = ({onChange, category}) => {
  const categories = [
    "High ABV (>6.0%)",
    "Classic Range",
    "Acidic (pH <4)"
  ]

  const toggleFilter = (event) => {
    console.log(!event.target.checked);
    return !event.target.checked
  }

  const profileListJSX = profiles.map((profile) => (
    <ProfileCard 
        name={profile.name} 
        email={profile.email} 
        image={profile.image} 
        phoneNumber={profile.phoneNumber}
      />
  ));
  
  return (
    <section className="filters">
      <header id="filters-header">Filters</header>
      <ul>
        {categories.map((category) => (
          <li className="filter-item" key={category}>
            <label>
              <input
                onChange={onChange}
                type="checkbox"
                value={category}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterList;
