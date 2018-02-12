import React from 'react';
import ReactDOM from 'ract-dom';
import { Container, Row, Col } from 'react-grid-system';

class SlackChannel extends React.Component {
  render() {
    return(
      <Col lg={12}>
        <img className="slack-channel" src="./images/SlackChannel.svg"/>
      </Col>
    )
  }
}

module.exports = SlackChannel;
