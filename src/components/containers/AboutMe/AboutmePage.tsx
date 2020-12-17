import React from "react";
//library
import { withStyles } from "@material-ui/styles";
//component
import { CardBody } from "../../../utils/styled-components";
import CircleProgressbar from "./CircleProgressbar";
import aboutme from "../../../assets/aboutme.jpg";

declare namespace AboutmePage {
  export interface Props {
    classes: any;
  }
  export interface States {}
}
const styles: any = (theme: any) => ({
  background: {
    backgroundImage: `url(${aboutme})`,
    width: "100%",
    height: "100%",
    // backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  text: {
    margin: 0,
    fontSize: "1.2rem",
    lineHeight: 1.6,
    paddingTop: "1rem",
  },
});
class AboutmePage extends React.Component<
  AboutmePage.Props,
  AboutmePage.States
> {
  render() {
    const { classes } = this.props;
    return (
      <CardBody className={classes.background}>
        <div>
        <CircleProgressbar />
        <p className={classes.text}>
          <b>Oriented Development</b>
        </p>
        <p className={classes.text}>
          My plan is to work hard and gets to know the work with front end
          position. I will always challenge to have enough experience to work as
          position also. Within one year, I'm looking forward to getting myself
          from junior position to middle position and learning up to date
          knowledge. With that being said, from 4-5 years from today, I can try
          to work as a project manager.
        </p>
        </div>
      </CardBody>
    );
  }
}
export default withStyles(styles)(AboutmePage);
