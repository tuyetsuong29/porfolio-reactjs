import React from "react";
//component
import { CardBody } from "../../../utils/styled-components";
import background from "../../../assets/contactme4.jpg";
//library
import { withStyles } from "@material-ui/styles";
import TadaReveal from "../../AnimationText/TadaReveal";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PopupForm from "./PopupForm";

declare namespace ContactmePage {
  export interface Props {
    classes: any;
  }
  export interface States {
    open: boolean;
    inforUser: any;
  }
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
  infoUser: {
    height: "auto",
  },
  infoModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textopiniom: {},
});
class ContactmePage extends React.Component<
  ContactmePage.Props,
  ContactmePage.States
> {
  state = {
    open: false,
    inforUser: {
      name: "",
      nameCompany: "",
      position: "",
      note: "",
    },
  };
  handleShowDialog = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handleChange = (e: any) => {
    let state: any = this.state;
    let data = state.inforUser;
    data[e.target.name] = e.target.value;
    this.setState(state);
  };
  handleSubmit = () => {
    this.setState({
      inforUser: this.state.inforUser,
    });
  };
  render() {
    console.log("inforUser", this.state.inforUser.name);
    console.log("inforUser", this.state.inforUser.nameCompany);
    console.log("inforUser", this.state.inforUser.position);
    console.log("inforUser", this.state.inforUser.note);
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
        <div>
          <button onClick={() => this.handleShowDialog()}>
            <i>Click here</i>
          </button>
        </div>
        {/* =============== */}
        <div>
          {this.state.open && (
            <PopupForm>
              {
                <CardBody style={{ paddingBottom: "3rem" }}>
                  <form
                    onChange={(e: any) => this.handleChange(e)}
                    onSubmit={() => this.handleSubmit()}
                  >
                    <p
                      style={{
                        fontSize: "1.5rem",
                        margin: "2.5rem 0 2.5rem 0",
                        textAlign: "center",
                        fontWeight: 600,
                      }}
                    >
                      <i>Suggestion Box</i>
                    </p>
                    <div className={classes.infoModal}>
                      <div>
                        <label>Name:</label>
                        <input
                          style={{
                            height: "2rem",
                            borderRadius: "8px",
                            border: "1px solid 	#989898",
                          }}
                          type="text"
                          className=" form-control col-sm-4"
                          name="name"
                          placeholder="Type your name.."
                        ></input>
                      </div>
                      <div style={{ marginLeft: "1.5rem" }}>
                        <label>Name Company:</label>
                        <input
                          style={{
                            height: "2rem",
                            borderRadius: "8px",
                            border: "1px solid 	#989898",
                          }}
                          type="text"
                          className=" form-control col-sm-4 "
                          name="nameCompany"
                          placeholder="Type your name company.."
                        ></input>
                      </div>
                      <div>
                        <label>Position:</label>
                        <input
                          style={{
                            height: "2rem",
                            borderRadius: "8px",
                            border: "1px solid 	#989898",
                          }}
                          type="text"
                          className="form-control col-sm-2"
                          name="position"
                          placeholder="Type your position.."
                        ></input>
                      </div>
                    </div>
                    <div style={{ marginTop: "2.5rem" }}>
                      <label>Your Opinion:</label>
                      <textarea
                        className={classes.textopiniom}
                        name="note"
                        style={{
                          height: "7rem",
                          width: "100%",
                          marginTop: "2rem",
                          overflow: "hidden",
                        }}
                      ></textarea>
                    </div>
                    <div style={{ marginTop: "1rem", float: "right" }}>
                      <button type="button" className="btn btn-primary">
                        Cancle
                      </button>
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </form>
                </CardBody>
              }
            </PopupForm>
          )}
        </div>
      </CardBody>
    );
  }
}
export default withStyles(styles)(ContactmePage);
