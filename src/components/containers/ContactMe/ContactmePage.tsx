import React from "react";
//component
import { CardBody } from "../../../utils/styled-components";
import background from "../../../assets/contactme4.jpg";
import PopupForm from "./PopupForm";
import TadaReveal from "../../AnimationText/TadaReveal";
//library
import { withStyles } from "@material-ui/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import DoubleArrowOutlinedIcon from "@material-ui/icons/DoubleArrowOutlined";

declare namespace ContactmePage {
  export interface Props {
    classes: any;
  }
  export interface States {
    open: boolean;
    show: boolean;
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
    fontSize: "1.3rem",
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
  formPopup: {
    paddingBottom: "3rem",
  },
  infoModal: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "2.5rem",
  },
  nameCompany: {
    margin: "0 1rem 0 2.5rem",
  },
  titleForm: {
    fontSize: "1.5rem",
    margin: "2.5rem 0 2.5rem 0",
    textAlign: "center",
    fontWeight: 600,
  },
  inputArea: {
    height: "2rem",
    borderRadius: "8px",
    border: "1px solid 	#989898",
  },
  button: {
    marginTop: "1rem",
  },
  textOpinion: {
    marginTop: "2rem",
    overflow: "hidden",
  },
  confirmInfo: {
    display: "flex",
    flexDirection: "row",
    margin: "0 1rem 0 1rem",
  },
  allButton: {
    cursor: "pointer",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    marginLeft: "1rem",
    float: "right",
  },
  buttonshowForm: {
    cursor: "pointer",
    color: "white",
    fontSize: "1.2rem",
    "&:hover": {
      color: "#483D8B",
      fontWeight: 600,
      textDecoration: "underline",
    },
  },
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
    show: false,
  };
  showSuggestionBox = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleChange = (e: any) => {
    let state: any = this.state;
    let data = state.inforUser;
    data[e.target.name] = e.target.value;
    this.setState(state);
  };
  ShowConfirmForm = () => {
    this.setState({
      open: false,
      show: true,
    });
  };
  showAlert = () => {
    alert(
      "Don't worry!! I want to hear everything from you, give it a try. Thank you very much"
    );
  };
  render() {
    const { classes } = this.props;
    const { inforUser, show, open } = this.state;
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
        <div className={classes.boxInfomation}>
          <DoubleArrowOutlinedIcon className={classes.icon} />
          <span
            className={classes.buttonshowForm}
            onClick={() => this.showSuggestionBox()}
          >
            <i>
              {" "}
              :I want hearing from you <strong>"Click here"</strong>
            </i>
          </span>
        </div>
        {/* ====suggestionsForm==== */}
        <div>
          {open && (
            <PopupForm>
              {
                <CardBody className={classes.formPopup}>
                  <form onChange={(e: any) => this.handleChange(e)}>
                    <p className={classes.titleForm}>
                      <i>Suggestion Box</i>
                    </p>
                    <div className={classes.infoModal}>
                      <div>
                        <label>Name:</label>
                        <input
                          className={classes.inputArea}
                          type="text"
                          name="name"
                          placeholder="Type your name.."
                        ></input>
                      </div>
                      <div className={classes.nameCompany}>
                        <label>Name Company:</label>
                        <input
                          type="text"
                          className={classes.inputArea}
                          name="nameCompany"
                          placeholder="Type your name company.."
                        ></input>
                      </div>
                      <div>
                        <label>Position:</label>
                        <input
                          type="text"
                          className={classes.inputArea}
                          name="position"
                          placeholder="Type your position.."
                        ></input>
                      </div>
                    </div>
                    <div>
                      <label>Your Opinion:</label>
                      <textarea
                        className={classes.textopiniom}
                        name="note"
                        style={{ height: "7rem", width: "100%" }}
                      ></textarea>
                    </div>
                    <div className={classes.button}>
                      <button
                        className={classes.allButton}
                        type="button"
                        onClick={() => this.showAlert()}
                      >
                        Cancle
                      </button>
                      <button
                        className={classes.allButton}
                        onClick={() => this.ShowConfirmForm()}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </CardBody>
              }
            </PopupForm>
          )}
        </div>
        {/* ====ConfirmForm==== */}
        <div>
          {show && (
            <PopupForm>
              {
                <CardBody className={classes.formPopup}>
                  <div>
                    <h2 className={classes.titleForm}>
                      <i>Please Confirm Your Infomation</i>
                    </h2>
                    <div className={classes.confirmInfo}>
                      <p>
                        <b>Name:</b>
                      </p>
                      <p>{inforUser.name}</p>
                    </div>
                    <div className={classes.confirmInfo}>
                      <p>
                        <b>Name Company:</b>
                      </p>
                      <p>{inforUser.nameCompany}</p>
                    </div>
                    <div className={classes.confirmInfo}>
                      <p>
                        <b>Position:</b>
                      </p>
                      <p>{inforUser.position}</p>
                    </div>
                    <div className={classes.confirmInfo}>
                      <p>
                        <b>Your Opinion:</b>
                      </p>
                      <p>{inforUser.note}</p>
                    </div>
                  </div>
                  <div className={classes.button}>
                    <button
                      className={classes.allButton}
                      onClick={() => this.handleClose()}
                    >
                      OK
                    </button>
                  </div>
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
