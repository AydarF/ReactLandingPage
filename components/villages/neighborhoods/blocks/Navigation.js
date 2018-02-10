import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Col lg={6}>
          <Branding />
        </Col>
        <Col lg={6}>
          <Demolink />
        </Col>
      </div>
    )
  }
}

module.exports = Navigation;
