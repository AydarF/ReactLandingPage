import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './components/villages/neighborhoods/blocks/Section Description.js';
import CallToAction from './components/villages/neighborhoods/blocks/houses/Laptop.js';


class SectionA extends React.Component {
  render() {
    return (
      <section>
        <Container>
          <Row>
            <SectionDescription />
            <Laptop />
          </Row>
        </Container>
      </section>
    )
  }
}

module.exports = SectionA;
