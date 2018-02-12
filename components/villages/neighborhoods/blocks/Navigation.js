import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Branding.js';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Demo Link.js'; 

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Col lg={6}>
          <Branding />
        </Col>
        <Col lg={6}>
          <DemoLink />
        </Col>
      </div>
    )
  }
}

module.exports = Navigation;
