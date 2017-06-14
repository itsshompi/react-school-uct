import React, { Component } from 'react';

class Shiny extends Component {
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9 animated fadeIn">
        <iframe className="shiny embed-responsive-item" src="https://gisapp.shinyapps.io/apps/"></iframe>
      </div>
    );
  }
}

export default Shiny;
