import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './components/villages/neighborhoods/Header.js';
import CallToAction from './components/villages/neighborhoods/Section A.js';
import CallToAction from './components/villages/neighborhoods/Section B.js';
import CallToAction from './components/villages/neighborhoods/Section C.js';
import CallToAction from './components/villages/neighborhoods/Footer.js';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header />
        <SectionA />
        <SectionB />
        <SectionC />
        <Footer />
      </div>
    )
  }
}

module.exports = LandingPage;
