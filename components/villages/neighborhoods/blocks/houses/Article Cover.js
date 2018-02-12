import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class ArticleCover extends React.Component {
  render() {
    return(
      <Col>
        <img  className="article-cover" src="./images/ArticleCover.svg" />
      </Col>
    )
  }
}

module.exports = ArticleCover;
