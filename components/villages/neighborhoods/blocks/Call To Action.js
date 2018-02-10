import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

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
