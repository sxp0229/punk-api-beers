import Main from "./Main";
import Nav from "../../components/Nav/Nav";
import { render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";

describe('Main', () => {
  it("should render the Main container", () => {
    render(<Main />);
    const html = screen.debug();
    expect(html)
  })

  describe('Search Box', () => {
    it('should show the Search for Beers label', () => {
      render(<Main />);
      const searchBeersText = screen.getByText("Search for Beers");
      expect(searchBeersText).toBeInTheDocument();
    })

    // it("should render the Search Box form", () => {
    //   render(<Main />);
    //   const searchBox = screen.getByRole("form");
    //   expect(searchBox).toBeInTheDocument();
    // })
  })  

  describe('Filters', () => {
    it('should render the ABV filter', () => {
      render(<Main />);
      const abv = screen.getByText("High ABV (>6.0%)");
      expect(abv).toBeInTheDocument();
    })

    it('should render the Classic Range filter', () => {
      render(<Main />);
      const classic = screen.getByText("Classic Range");
      expect(classic).toBeInTheDocument();
    })

    it('should render the pH filter', () => {
      render(<Main />);
      const ph = screen.getByText("Acidic (pH <4)");
      expect(ph).toBeInTheDocument();
    })
  })
})
