import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class SectionDescription extends React.Component {
  render() {
    return(
      <Col lg={6}>
        <Heading />
        <Divider />
        <Paragraph />
      </Col>
    )
  }
}

module.exports = SectionDescription;
