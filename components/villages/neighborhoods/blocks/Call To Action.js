import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Title.js';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Subtitle.js';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Button.js';

class CallToAction extends React.Component {
  render() {
    return (
      <Col lg={12}>
        <Title />
        <Subtitle />
        <Button />
      </Col>
    )
  }
}

module.exports = CallToAction;
