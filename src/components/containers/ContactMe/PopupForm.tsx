import React from "react";
//library
import { withStyles } from "@material-ui/styles";
// import {FontAwesome} from "react-fontawesome";

declare namespace PopupForm {
  export interface Props {
    classes: any;
    children:any;

  }
  export interface States {}
}

const styles: any = (theme: any) => ({
  overlay: {
    position: "fixed",
    display: "block",
    overflow: "auto",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 999,
    cursor: "pointer",
  },
  content: {
    margin: "5% auto",
    height:"auto",
    backgroundColor: "white",
    borderRadius: "0.25rem",
    width: "50vw",
    position: "relative",
   
  },
});

class PopupForm extends React.Component<PopupForm.Props, PopupForm.States> {
  state = {
    open: false,
  };
  closeModal = () => {
    this.setState({
      open: false,
    });
  };
 

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.overlay}>
        <div className={classes.content}>
      
        {this.props.children}
          {/* <FontAwesome
            name="times"
            onClick={() => this.closeModal()}
            style={{
              color: "#000000",
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "transparent",
              border: 0,
              position: "absolute",
              top: "0.3rem",
              right: "0.5rem",
            }}
          /> */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PopupForm);
