import classes from "./Navbar.module.css";
import Logo from "../../Assets/logoName.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <Link to="/">
          <img className={classes.logo} src={Logo} alt="Ace Drops" />
        </Link>
        <ul className={classes.navs}>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/seller">
            <li>Seller</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
