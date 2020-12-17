import React, { Component } from "react";
// library
import { withStyles } from "@material-ui/styles";
// component
import { CardBody } from "../../utils/styled-components";
import WrapperProject from "./WrapperProject";
import background from "../../assets/background1.jpg";
import tictoe from "../../assets/tictoe.png";
import movie from "../../assets/moviea.png";
import todoList from "../../assets/todolist.png";
import user from "../../assets/usermanagement.png";

declare namespace ProjectsPage {
  export interface Props {
    classes: any;
  }
  export interface States {}
}
const styles: any = (theme: any) => ({
  background: {
    backgroundImage: `url(${background})`,
  },
  project: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0 1.5rem 3.5rem 1.5rem",
  },
  imageWrapper: {
    height: "15rem",
    weight: "100%",
  },
  imageProject: {
    width: "100%",
    height: "100%",
    transition: " all ease-in-out 0.4s",
    borderRadius: "10px",
    "&:hover": {
      transform: `scale(1.1)`,
    },
  },
  nameProject: {
    paddingBottom: "0.5rem ",
    fontSize: "1rem",
    margin: "0.5rem 0 0 0",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    textDecoration: "none",
  },
  textLink: {
    textDecoration: "none",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    color: "black",
  },
  button: {
    backgroundColor: "#d8d8d8",
    width: "6rem",
    borderRadius: "26px",
    cursor: "pointer",
    marginLeft: "6rem",
    marginBottom: "0.5rem",
  },
});

class ProjectsPage extends Component {
  props: any = this.props;
  render() {
    const { history, classes } = this.props;
    return (
      <CardBody className={classes.background}>
        <div className={classes.project}>
          {/* ====Project 1==== */}
          <WrapperProject>
            {
              <div className={classes.imageWrapper}>
                <img
                  className={classes.imageProject}
                  src={tictoe}
                  alt="tictoe"
                />
              </div>
            }
            {
              <div className={classes.nameProject}>
                <h5 className={classes.nameProject}>Tic Tic Toe</h5>
                <div className={classes.button}>
                  <a
                    className={classes.textLink}
                    href="https://github.com/tuyetsuong29/newtictoe"
                  >
                    My Github
                  </a>
                </div>
              </div>
            }
          </WrapperProject>
          {/* ====Project 2==== */}
          <WrapperProject>
            {
              <div className={classes.imageWrapper}>
                <img className={classes.imageProject} src={movie} alt="movie" />
              </div>
            }
            {
              <div className={classes.nameProject}>
                <h5 className={classes.nameProject}>Favorite Movie</h5>
                <div className={classes.button}>
                  <a
                    className={classes.textLink}
                    href="https://github.com/tuyetsuong29/movieapp"
                  >
                    My Github
                  </a>
                </div>
              </div>
            }
          </WrapperProject>
        </div>
        <div className={classes.project}>
          {/* ====Project 3==== */}
          <WrapperProject>
            {
              <div className={classes.imageWrapper}>
                <img
                  className={classes.imageProject}
                  src={todoList}
                  alt="todoList"
                />
              </div>
            }
            {
              <div className={classes.nameProject}>
                <h5 className={classes.nameProject}>To Do List</h5>
                <div className={classes.button}>
                  <a
                    className={classes.textLink}
                    href="https://github.com/tuyetsuong29/google"
                  >
                    My Github
                  </a>
                </div>
              </div>
            }
          </WrapperProject>
          {/* ====Project 4==== */}
          <WrapperProject>
            {
              <div className={classes.imageWrapper}>
                <img className={classes.imageProject} src={user} alt="user" />{" "}
              </div>
            }
            {
              <div className={classes.nameProject}>
                <h5 className={classes.nameProject}>User Management</h5>
                <div className={classes.button}>
                  <a
                    className={classes.textLink}
                    href="https://github.com/tuyetsuong29/newtictoe"
                  >
                    My Github
                  </a>
                </div>
              </div>
            }
          </WrapperProject>
        </div>
      </CardBody>
    );
  }
}

export default withStyles(styles)(ProjectsPage);
// <>
//   <Button onClick={() => history.push("/Home/MyProjects/1")}>engineer</Button>
//   <Button onClick={() => history.push("/Home/MyProjects/2")}>marketer</Button>
//   <Button onClick={() => history.push("/Home/MyProjects/3")}>designer</Button>
// </>
