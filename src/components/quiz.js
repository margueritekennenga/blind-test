import React, { Component } from 'react';

class Quiz extends Component {

  state = {
    question: '',
      answers : {
        1: '',
        2: '',
        3: '',
      },
      correct : '',
  }
  
 
  componentDidMount(){ 
      this.setState({question: 'Qui interprète ce morceau ?'})
      setTimeout(() => {
        this.setState({
          answers : {
            1: this.props.tracks[0].artist.name,
            2: this.props.tracks[1].artist.name,
            3: this.props.tracks[2].artist.name,
          },
          correct : this.props.response.artist.name,
        })
       }, 3000);
  } 

  render(){
    
    const allAnswers = Object
    .keys(this.state.answers)
    .map(key => <h4>{this.state.answers[key]}</h4>)

    return(
      <div>
        <p>{this.state.question}</p>
        <div>
          {allAnswers}
        </div>
      </div>
    )
  }
}



export default Quiz;