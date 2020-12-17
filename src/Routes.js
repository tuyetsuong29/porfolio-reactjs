import React from "react";
import AboutMePage from "./components/containers/AboutMe/AboutmePage";
import MyProjectsPage from "./components/MyProject/ProjectsPage";
import ContactMePage from "./components/containers/ContactMe/ContactmePage";
import Home from "./components/containers/Home/Home";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./utils/Breadcrumbs";
//STYLES
import {
  BodyWrapper,
  Container,
  Header,
  BodyWrraper,
} from "./utils/styled-components";

class Routes extends React.Component {
  render() {
    return (
      <BodyWrapper>
        <Navbar />

        <Container>
          <Header>
            <Breadcrumbs />
          </Header>

          <BodyWrraper>
            <Switch>
              <Route exact from="/" render={(props) => <Home {...props} />} />
              <Route
                exact
                path="/Home/AboutMe"
                render={(props) => <AboutMePage {...props} />}
              />
              <Route
                exact
                path="/Home/MyProjects"
                render={(props) => <MyProjectsPage {...props} />}
              />
              <Route
                exact
                path="/Home/ContactMe"
                render={(props) => <ContactMePage {...props} />}
              />
            </Switch>
          </BodyWrraper>
        </Container>
      </BodyWrapper>
    );
  }
}

export default Routes;
