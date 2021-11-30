import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {FormattedMessage} from 'react-intl';
import {Context} from "./Wrapper";

import "./style.css";

import logo from "./img/logo.svg";

/* Example JSON Object To Store i18n Text */
const i18n = {

}

const Knowledge = () => {

  const [lang, setLang] = useState("en"); 

  const context = useContext(Context);

  const navbarTranslations = {
    title : <FormattedMessage id = "app.navbar.title" />,
    home : <FormattedMessage id = "app.navbar.home" />,
    search : <FormattedMessage id = "app.navbar.search" />,
    about : <FormattedMessage id = "app.navbar.about" />,
    contact : <FormattedMessage id = "app.navbar.contact" />,
    language : <FormattedMessage id = "app.navbar.language" />,
  }

  const contentTranslations = {
    paragraph : [
      <FormattedMessage id = "app.home.paraOne" />,
      <FormattedMessage id = "app.home.paraTwo" />,
      <FormattedMessage id = "app.home.paraThree" />,
      <FormattedMessage id = "app.home.paraFour" />,
    ],
    title : <FormattedMessage id = "app.home.title" />,
    subtitle : <FormattedMessage id = "app.home.subtitle" />,
    callToAction : <FormattedMessage id = "app.home.callToAction" />
  }

  const toggleLanguage = () => {
    if(lang == "en"){
      setLang("fr");
      context.selectLanguage("fr");
    }
    else{
      setLang("en");
      context.selectLanguage("en");
    }
  }

  return(
    <Container className="p-3">
    {/*Navigation bar*/}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Knowledge Graph"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" " /*Spacing between logo and title*/ }
            {navbarTranslations.title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">{navbarTranslations.home}</Nav.Link>
              <Nav.Link href="#search">{navbarTranslations.search}</Nav.Link>
              <Nav.Link href="#about">{navbarTranslations.about}</Nav.Link>
              <Nav.Link href="#contact">{navbarTranslations.contact}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="light" onClick={() => {toggleLanguage()}}>{navbarTranslations.language}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Content*/}
      <Container className="p-5 mb-4 bg-light rounded-3">

        {/*Header*/}
        <Row className="">
          <Col>
            <h1 className="header">{contentTranslations.title}</h1>
          </Col>
        </Row>

        {/*Introduction*/}
        <Row>
          <p>{contentTranslations.paragraph[0]}</p>
          <p>{contentTranslations.paragraph[1]}</p>
        </Row>

        {/*Sub Header*/}
        <Row className="justify-content-md-center">
          <Col md="auto"><h2 className="display-6 bg-primary rounded-3 p-2">{contentTranslations.subtitle}</h2></Col>
        </Row>

        {/*Further Information*/}
        <Row>
          <p>{contentTranslations.paragraph[2]}</p>
          <p>{contentTranslations.paragraph[3]}</p>
        </Row>

        {/*Call To User Action*/}
        <Row className="justify-content-md-center">
          <Col md="auto"><h2 className="display-4 bg-light border border-primary rounded-3 p-3"><a href="#call_to_action" className="no-underline">{contentTranslations.callToAction}</a></h2></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Knowledge;
