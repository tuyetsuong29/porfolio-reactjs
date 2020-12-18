import React from "react";
//component
import { CardBody } from "../../../utils/styled-components";
import background from "../../../assets/contactme4.jpg";
//library
import { withStyles } from "@material-ui/styles";
import TadaReveal from "../../AnimationText/TadaReveal";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

declare namespace ContactmePage {
  export interface Props {
    classes: any;
  }
  export interface States {}
}

const styles: any = (theme: any) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: " cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "70px",
  },
  text: {
    fontSize: "1.5rem",
    color: "white",
  },
  icon: {
    fontSize: "2rem",
    color: "white",
    fontWeight: 600,
  },
  textlink: {
    height: "auto",
    fontSize: "1.3rem",
    color: "white",
    textDecoration: "none",
    fontWeight: 100,
    "&:hover": {
      color: "#483D8B",
      fontWeight: 600,
    },
  },
  boxInfomation: {
    display: "flex",
    flexDirection: "row",
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
        <TadaReveal className={classes.text} />
        <p className={classes.text}></p>
        <div className={classes.boxInfomation}>
          <MailOutlineIcon className={classes.icon} />
          <a className={classes.textlink} href="nguyentuyetsuong0604@gmail.com">
            <i> :nguyentuyetsuong0604@gmail.com</i>
          </a>
        </div>
        <div className={classes.boxInfomation}>
          <WhatsAppIcon className={classes.icon} />
          <p className={classes.textlink}>
            <i>:0798.210.776</i>
          </p>
        </div>
      </CardBody>
    );
  }
}

export default withStyles(styles)(ContactmePage);
