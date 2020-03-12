import React, { Component } from 'react';
let allAnswers = []

class Quiz extends Component {

  constructor(props) {
    super(props)
    this.state = {
    question: '',
      answers : {
        1: '',
        2: '',
        3: '',
      },
      correct : '',
      userAnswer: '',
      try : 0,
      point :0,
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
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
       }, 10000);
  } 

  handleChange(event) {
    console.log(event.target.value)
    this.setState({userAnswer: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.try <= 2){
      this.setState({try: +this.state.try+1});
      for(var i=0; i<3; i++){
        if(this.state.userAnswer===this.state.correct){
        console.log('good')
        this.setState({point: +this.state.point+1});
        }
        else{
          console.log('bad')
        }
      } 
    }
    if (this.state.try < 2) {
      event.preventDefault();
      
      this.props.thomas(true)
    this.setState({
      answers : {
        1: '',
        2: '',
        3: '',
      },
      correct : '',
    })
    this.componentDidMount()
    }
    }

  render(){
    allAnswers = Object
    .keys(this.state.answers)
    .map(key => <div><label>{this.state.answers[key]}</label><input type="radio" onChange={this.handleChange} value={this.state.answers[key]} name='question' ></input></div>)

    let points = this.state.point
    console.log(this.state.try)
    return(
      <div>
        <p>{this.state.question}</p>
        <div>
          {allAnswers}
          <button onClick={this.handleSubmit}>Valider</button>
          <h3>Good answers : {this.state.try > 2 ? points : ''}/3</h3>
        </div>
      </div>
    )
  }
}

export default Quiz;