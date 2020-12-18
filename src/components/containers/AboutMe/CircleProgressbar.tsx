import React from "react";
//library
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { withStyles } from "@material-ui/styles";

declare namespace CircleProgressbar {
  export interface Props {
    classes: any;
  }
  export interface States {}
}
const styles: any = (theme: any) => ({
  progressBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  circle: {
    width: "15%",
    fontFamily: "Lora, serif",
    margin: "0 1rem 2rem 1rem",
    fontWeight: 600,
  },
});

class CircleProgressbar extends React.Component<
  CircleProgressbar.Props,
  CircleProgressbar.States
> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.progressBar}>
        <div className={classes.circle}>
          <CircularProgressbar
            value={0.7}
            maxValue={1}
            text={`${0.7 * 100}% HTML & CSS`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              pathTransitionDuration: 0.5,
              textSize: "8px",
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div className={classes.circle}>
          <CircularProgressbar
            value={0.6}
            maxValue={1}
            text={`${0.6 * 100}% JAVASCRIPT`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              pathTransitionDuration: 0.5,
              textSize: "8px",
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div className={classes.circle}>
          <CircularProgressbar
            value={0.75}
            maxValue={1}
            text={`${0.75 * 100}% REACTJS & REDUX`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              pathTransitionDuration: 0.5,
              textSize: "7px",
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div className={classes.circle}>
          <CircularProgressbar
            value={0.7}
            maxValue={1}
            text={`${0.7 * 100}% GITLAB,GITHUB`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              pathTransitionDuration: 0.5,
              textSize: "8px",
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(CircleProgressbar);
