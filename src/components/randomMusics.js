import React, { Component } from 'react';

class randomMusics extends Component {
     
  render(){
      
    return(
      
      <div>
        <h1>Welcome {this.props.name}</h1>
        <div>{this.props.randomTracks}</div>
      </div>

    )
  }
}

export default randomMusics;