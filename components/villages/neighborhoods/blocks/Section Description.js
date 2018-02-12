import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Heading.js';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Divider.js';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Paragraph.js';

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
