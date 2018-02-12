import React from 'react';
import ReactDOM from 'react-dom';

class Paragraph extends React.Component {
  render() {
    return(
      <div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent volutpat, elit pulvinar aliquam convallis,
          libero mauris rhoncus erat, non porttitor lectus justo et ex.
          In hac habitasse platea dictumst.
        </p>
      </div>
    )
  }
}

module.exports = Paragraph;
