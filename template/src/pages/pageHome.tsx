import React from "react";

import { Col, Row } from "react-bootstrap";
import Helmet from "../Helmet/helmet";

import Navbar from "core/navbar/mono-navbar";

import PageHome from "./PageHome/PageHome";

import Footer from "core/footer/footer";


function App() {


  return (
    <>
      <Helmet />
      <Row >
        <Col xs={12} xl={12} md={12} lg={12} sm={12} id="presentation">
          <Navbar />

          <PageHome />

          <Footer />

        </Col>

      </Row>

    </>);
}

export default App;