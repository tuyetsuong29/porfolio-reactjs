import React, { Component } from "react";
import { Button } from "@material-ui/core";

class ProjectsPage extends Component {
    props: any = this.props;
  render() {
    const { history } = this.props;
    return (
      <>
        <Button onClick={() => history.push("/Home/MyProjects/1")}>engineer</Button>
        <Button onClick={() => history.push("/Home/MyProjects/2")}>marketer</Button>
        <Button onClick={() => history.push("/Home/MyProjects/3")}>designer</Button>
      </>
    );
  }
}

export default ProjectsPage;
