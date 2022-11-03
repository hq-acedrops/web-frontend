import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import Logo from "../../../Assets/logoBW.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainDiv}>
        <img className={classes.logo} src={Logo} alt="Logo" />
        <p className={classes.para}>
          <ul className={classes.footerul}>
            Quick Links :
            <li className={classes.footerli}>
              <a
                href="https://docs.google.com/document/d/16aRdeVr0gpMsLqcumAuJqcrrYZolw7dBtocQPD78I1Q/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>
            </li>
            <li className={classes.footerli}>
              <a
                href="https://docs.google.com/document/d/1KCm_j-8WR6_M1n_bW0JxcIMX01bCVuLPFXK1IDCh4H8/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            {/* <li className={classes.footerli}>
              <a href="" target="_blank">
                Refund
              </a>
            </li> */}
          </ul>
        </p>
        <p className={classes.copyright}>
          All copyrights are reserved @acedrops.in
        </p>
      </div>
      <div className={classes.contact}>
        <Link to="/contact">
          <h3 className={classes.heading}>Contact Us</h3>
        </Link>
        <span>
          <a href="tel:+916392970547">
            <i className="fa-solid fa-phone"></i> +91-63929 70547
          </a>
        </span>
        <span>
          <a href="tel:+919565973316">
            <i className="fa-solid fa-phone"></i> +91-95659 73316
          </a>
        </span>
        <br />
        <span className={classes.email}>
          <a href="mailto:support@acedrops.in">
            <i className="fa-solid fa-envelope"></i>
            <span>support@acedrops.in</span>
          </a>
        </span>
      </div>
      <div className={classes.address}>
        <h3 className={classes.heading}>Address</h3>
        <span>27, Milestone</span>
        <span>Delhi-Meerut Highway</span>
        <span>Ajay Kumar Garg Engineering</span>
        <span>College</span>
        <span>Ghaziabad</span>
        <span>Uttar Pradesh</span>
      </div>
    </div>
  );
};

export default Footer;
