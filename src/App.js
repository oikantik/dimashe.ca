import homeHeroTop from "./assets/bg-1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import logoImage from "./assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  homeHero: {
    display: "flex",
    minHeight: "100vh",
  },
  homeHeroTextSection: {
    flex: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#f9fafb",
    paddingLeft: "1.5rem",
  },
  logo: {
    width: "150px",
  },
  homeHeroTextHighlighted: {
    color: "#5850ea",
  },
  homeHeroImageSection: {
    flex: "50%",
  },
  homeHeroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  homeHeroButton: {
    width: "180px",
    background: "#5850ea",
    textTransform: "capitalize",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.homeHero}>
      <div className={classes.homeHeroTextSection}>
        <img src={logoImage} alt='logo' className={classes.logo} />
        <h1>
          Data to enrich your{" "}
          <span className={classes.homeHeroTextHighlighted}>
            online business
          </span>
        </h1>
        <p>Lorem Ipsum decorum, Lorem Ipsum decorum, Lorem Ipsum decorum</p>
        <Button
          variant='contained'
          color='primary'
          className={classes.homeHeroButton}>
          Contact Us
        </Button>
      </div>
      <div className={classes.homeHeroImageSection}>
        <img
          src={homeHeroTop}
          alt='home-hero'
          className={classes.homeHeroImage}
        />
      </div>
    </div>
  );
}

export default App;
