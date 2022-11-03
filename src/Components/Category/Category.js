import classes from "./Category.module.css";
import jewelleries from "../../Assets/jewelleries.jpg";
import handicrafts from "../../Assets/handicrafts.jpg";
import wearables from "../../Assets/wearables.jpg";
import paintings from "../../Assets/paintings_and_portraits.jpg";
import thrift from "../../Assets/thrift_shops.jpg";
import bakery from "../../Assets/chocolates_and_bakery.jpg";
import closet from "../../Assets/closet_and_wearables.jpg";
import decoratives from "../../Assets/decoratives.jpg";
import crystal from "../../Assets/Crystal_and_resin_art.jpg";

const Category = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Categories</h2>
      <div className={classes.section}>
        <p className={classes.para}>
          Collection of variety that's second to none, with more than 9
          categories to shop on, and that too with customization
        </p>
        <div className={classes.categories_img}>
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={jewelleries}
                alt="Acedrops : Jewellery Category"
              />
            </div>
            <span className={classes.label}>Jewellery</span>
          </div>
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={handicrafts}
                alt="Acedrops : Handicrafts Category"
              />
            </div>
            <span className={classes.label}>Handicrafts</span>
          </div>
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={wearables}
                alt="Acedrops : Wearables Category"
              />
            </div>
            <span className={classes.label}>Wearables</span>
          </div>
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={paintings}
                alt="Acedrops : Paintings Category"
              />
            </div>
            <span className={classes.label}>Paintings</span>
          </div>
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={thrift}
                alt="Acedrops : Thrift Shops Category"
              />
            </div>
            <span className={classes.label}>Thrift Shops</span>
          </div>
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={bakery}
                alt="Acedrops : Chocolates &amp; Bakery Category"
              />
            </div>
            <span className={classes.label}>Bakery</span>
          </div>
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={closet}
                alt="Acedrops : Closet &amp; Wearables Category"
              />
            </div>
            <span className={classes.label}>Closet &amp; Wearables</span>
          </div>
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={decoratives}
                alt="Acedrops : Decoratives"
              />
            </div>
            <span className={classes.label}>Decoratives</span>
          </div>
          {/* <div className={classes.headers}>
            <div className={classes.images}>
              <img className={classes.jpg} src={diys} alt="Acedrops : DIYs" />
            </div>
            <span className={classes.label}>
              DIYs
            </span>
          </div> */}
          <div className={classes.headers}>
            <div className={classes.images}>
              <img
                className={classes.jpg}
                src={crystal}
                alt="Acedrops : Crystal &amp; Resin Art"
              />
            </div>
            <span className={classes.label}>Crystal &amp; Resin Art</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
