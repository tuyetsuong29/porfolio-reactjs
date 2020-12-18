import React from "react";
//component
import logo from "../../../assets/banner1.jpg";
//library
import { withStyles } from "@material-ui/styles";
import TypicalEffect from "../../AnimationText/TypicalEffect";
import AnimationReveal from "../../AnimationText/AnimationReveal";

declare namespace Home {
  export interface Props {
    classes: any;
  }
  export interface States {}
}

const styles: any = (theme: any) => ({
  background: {
    backgroundImage: `url(${logo})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    color: "#9370DB",
    fontSize: "1.5rem",
    fontFamily: "Lora, serif",
  },
  name: {
    paddingLeft: "3rem",
    paddingTop: "4rem",
    fontSize: "2rem",
  },
});

class Home extends React.Component<Home.Props, Home.States> {
  render() {
    const { classes } = this.props;
    return (
      <div className="container ">
        <div className="card card-custom">
          <div className={classes.background}>
            <div className={classes.text}>
              <AnimationReveal />
              <h3 className={classes.name}>
                <i> I'm Suong Nguyen</i>
              </h3>
              <TypicalEffect />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
