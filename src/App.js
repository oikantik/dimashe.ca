import homeHeroTop from "./assets/bg-1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import logoImage from "./assets/logo.svg";
import { SignupForm } from "./components/Form";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  homeHero: {
    display: "flex",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  homeHeroTextSection: {
    minWidth: "400px",
    flex: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#f9fafb",
    paddingLeft: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "2rem",
    },
  },
  logo: {
    width: "150px",
  },
  homeHeroText: {
    fontWeight: "bold",
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
    <Fragment>
      <section className={classes.homeHero}>
        <div className={classes.homeHeroTextSection}>
          <img src={logoImage} alt='logo' className={classes.logo} />
          <Typography variant='h3' className={classes.homeHeroText}>
            Data to enrich your{" "}
            <span className={classes.homeHeroTextHighlighted}>
              online business
            </span>
          </Typography>
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
      </section>

      <section>
        <SignupForm />
      </section>
    </Fragment>
  );
}

export default App;
