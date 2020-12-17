import { Component } from "react";
//library
import Fade from "react-reveal/Fade";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  text: {
    fontFamily: "Lora, serif",
    float: "right",
    marginRight: "18rem",
  },
});

class AnimationReveal extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fade left>
          <h1 className={classes.text}>
            <i>Hello World !</i>
          </h1>
        </Fade>
      </div>
    );
  }
}

export default withStyles(styles)(AnimationReveal);
