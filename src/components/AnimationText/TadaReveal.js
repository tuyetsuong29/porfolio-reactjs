import { Component } from "react";
import Roll from "react-reveal/Roll";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  fisrtText: {
    margin: "4rem 0 0 4rem",
    color: "white",
    fontSize: "3rem",
    height: "auto",
  },
  secondText: {
    margin: 0,
    height: 0,
    color: "white",
    fontWeight: 200,
    fontSize: "1.5rem",
  },
});

class TadaReveal extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Roll top>
          <h1 className={classes.fisrtText}>
            <i>Thanks You !</i>{" "}
          </h1>
          <h2 className={classes.secondText}>
            If you are interested in my profile don't hesitate to leave me a
            messages or contact me...
          </h2>
        </Roll>
      </div>
    );
  }
}
export default withStyles(styles)(TadaReveal);
