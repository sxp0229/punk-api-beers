import "./MainPanel.scss"
import BeerTiles from "../BeerTiles/BeerTiles";

const MainPanel = (props) => {
  const {beers} = props;

  return (
    <div className="main">
        <h2 className="main__heading">Brewdog's Beer Catalog</h2>
          <div className="all-beers">
            <BeerTiles beersArr={beers} />
          </div>
    </div>
  )

}

export default MainPanel