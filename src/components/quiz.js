import React, { Component } from 'react';

class Quiz extends Component {

  state = {
    question: '',
      answers : {
        1: '',
        2: '',
        3: '',
      },
      correct : ''
  }

  componentDidMount(){ 
  this.setState({
    question: 'Qui interprète ce morceau ?',
      answers : {
        a: 'moi',
        b: 'toi',
        c: 'lui',
      },
      correct : 'c'
  });
  }

  render(){
    return(
      <div>
        <p>{this.state.question}</p>
        {/* <p>{this.props.tracks[0].id}</p> */}
        <label>
          {/* <input>{this.props.}</input> */}
        </label>
      </div>
    )
  }
}



export default Quiz;