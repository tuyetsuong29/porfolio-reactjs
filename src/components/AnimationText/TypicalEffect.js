import React, { Component } from "react";
//library
import Typical from "react-typical";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  typicalEffect: {
    paddingLeft: "6rem",
    fontWeight: 600,
    paddingBottom: "10rem",
    fontSize: "2rem",
  },
});

class TypicalEffect extends Component {
  render() {
    const { classes } = this.props;
    return (
      <p className={classes.typicalEffect}>
        I'm {""}
        <Typical
          loop={Infinity}
          wrapper="i"
          steps={["  Web Front End Developer", 1000, ""]}
        />
      </p>
    );
  }
}
export default withStyles(styles)(TypicalEffect);
