import classes from "./About.module.css";
import aboutPng from "../../Assets/about.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <div className={classes.infoDiv}>
          <img className={classes.aboutPng} src={aboutPng} alt="about us" />
          <p className={classes.para}>
            AceDrops is an e-commerce marketplace that is made by a dreamer for
            dreamers. Our vision is to give all the social media business owners
            a platform where they can sell their products, with their identity,
            and royalty to know more about us...
          </p>
          <center>
            <Link to="/about">
              <p className={classes.btn}>More Details...</p>
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
};

export default About;
