import React from "react";
//component
import { CardBody } from "../../../utils/styled-components";
import background from "../../../assets/contact.jpg";
//library
import { withStyles } from "@material-ui/styles";

declare namespace ContactmePage {
  export interface Props {
    classes: any;
  }
  export interface States {}
}

const styles: any = (theme: any) => ({
  background: {
    backgroundImage: `url(${background})`,

    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
  },
  textDropdown: {
    position: "relative",
    display: "inline-block",
    "&:hover": {
      texttransform: "uppercase",
    },
  },
  iconMail: {
    textDecoration: "none",
    fontSize: "1.2rem",
    color: "#3b3737",
    cursor: "pointer",
    "&:hover": {
      contentDropdown: {
        display: "block",
      },
    },
  },
  contentDropdown: {
    display: "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minwidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
    padding: "12px 16px",
    zIndex: 1,
  },
});

class ContactmePage extends React.Component<
  ContactmePage.Props,
  ContactmePage.States
> {
  render() {
    const { classes } = this.props;
    return (
      <CardBody className={classes.background}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo magni perferendis nostrum culpa. Eos laudantium debitis unde natus nisi optio aspernatur fugit excepturi, cumque consectetur officiis, rerum eligendi repellendus voluptas.</p>
        <div className={classes.textDropdown}>
          <span className={classes.iconMail}>
            {/* <i className="fas fa-envelope"></i>  */}
            Send a mail
          </span>
          <div className={classes.contentDropdown}>
            <a href="mailto:nguyentuyetsuong0604@gmail.com">
              nguyentuyetsuong0604@gmail.com
            </a>
          </div>
        </div>
        <div className={classes.textDropdown}>
          <span className={classes.iconMail}>
            {/* <i className="fas fa-mobile-alt"></i> */}
            Call me
          </span>
          <div className={classes.contentDropdown}>
            <a href="tel:0798.210.776">0798210776</a>
          </div>
        </div>
      </CardBody>
    );
  }
}

export default withStyles(styles)(ContactmePage);
