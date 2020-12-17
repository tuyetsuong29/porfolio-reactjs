import React from "react";
//component
import { withStyles } from "@material-ui/styles";

declare namespace WrapperProject {
  export interface Props {
    classes: any;
    children: any;
  }
  export interface States {}
}
const styles: any = (theme: any) => ({
  card: {
    // width: "17rem",
    border: "1px solid rgba(196, 195, 195, 0.5)",
    boxShadow: "0 0 15px 0 rgba(196, 195, 195, 0.5)",
    borderRadius: "10px",
  },
});
class WrapperProject extends React.Component<
  WrapperProject.Props,
  WrapperProject.States
> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.card}>
        <div
          className="card"
          style={{ width: "18rem", height: "auto", backgroundColor: "white", borderRadius: "10px" }}
        >
          {this.props.children[0]}
          <div className="card-body">{this.props.children[1]}</div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(WrapperProject);
