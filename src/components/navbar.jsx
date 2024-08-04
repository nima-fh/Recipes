import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import Searchbar from "./searchbar";
import { UseTheme } from "../hooks/useTheme";

export function Navbar_Component() {
  const { color, changeColor } = UseTheme();
  return (
    <Navbar fluid rounded style={{ background: color }}>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <Link to="/">Nima food</Link>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          <Link to="/create">Create Recipe</Link>{" "}
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Searchbar />
      </Navbar.Collapse>
    </Navbar>
  );
}
