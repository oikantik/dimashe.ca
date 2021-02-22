import homeHeroTop from "./assets/bg-1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import logoImage from "./assets/logo.svg";
// import { SignupForm } from "./components/Form";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  homeHeroSection: {
    display: "flex",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  homeHeroTextArea: {
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
  homeHeroImageArea: {
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

  homeFormSection: {
    display: "flex",
    minHeight: "100vh",
    background: "#25303f",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  homeFormTextArea: {
    flex: "50%",
  },
  homeFormArea: {
    flex: "50%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <section className={classes.homeHeroSection}>
        <div className={classes.homeHeroTextArea}>
          <img src={logoImage} alt='logo' className={classes.logo} />
          <Typography variant='h3' className={classes.homeHeroText}>
            Available in the{" "}
            <span className={classes.homeHeroTextHighlighted}>
              GTA & Scarborough Area
            </span>
          </Typography>
          <p>
            Contact us today to get a quote without having to wait forever.
            Construction & services you can count on.
          </p>
          <Button
            variant='contained'
            color='primary'
            className={classes.homeHeroButton}
            href='mailto:dimasheconstruction@gmail.com?subject=Service%20Query&body=Description'
            rel='noreferrer'>
            Contact Us
          </Button>
        </div>
        <div className={classes.homeHeroImageArea}>
          <img
            src={homeHeroTop}
            alt='home-hero'
            className={classes.homeHeroImage}
          />
        </div>
      </section>

      {/*<section className={classes.homeFormSection}>
        <div className={classes.homeFormTextArea}>
          <SignupForm />
        </div>
        <div className={classes.homeFormArea}>Some text here</div>
  </section>*/}
    </Fragment>
  );
}

export default App;
