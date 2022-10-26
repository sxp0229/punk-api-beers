import Main from "./Main";
import Nav from "../../components/Nav/Nav";
import { render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";

describe('Main', () => {
  it("should render the Main container", () => {
    render(<Main />);
    screen.debug();
  })

  describe('Filters', () => {
    it('should render the ABV filter', () => {
      render(<Main />);
      const abv = screen.getByText("High ABV (>6.0%)");
      expect(abv).toBeInTheDocument();
    })
  })
})

// it("should render the ABV filter", () => {
//         render(<Main />);
//         const abv = screen.getByText("High ABV (>6.0%)");
//         expect(abv).toBeInTheDocument();
// })


// describe('Navbar', () => {
//     test('renders Navbar component', () => {
//         render(<Navbar />);
//         expect(screen.getByText('SearchTerm')).toBeInTheDocument();
//     })
// })