import React, { Component } from 'react';
let allAnswers = []
let allCorrectAnswers = []

class Quiz extends Component {

  constructor(props) {
    super(props)
    this.state = {
    show : [],
    url : 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/1051470831',
    tracks : "", 
    randomMusic: [],
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
      responses : "",
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      fetch(this.props.url)
    .then(res => res.json())
    .then(result => {
      this.setState({
        tracks: result.tracks.data,
      })
    }).then(()=>{
      this.randomMusic()
      this.resMusic()
      this.setQuizz()
    })
    }, 50);
  } 

  randomMusic(){
    const randomMusic = [];
    const showRandom = [];
    const randomNumbers = []
  
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * this.state.tracks.length);
      if (randomNumbers.indexOf(randomNumber) === -1) { 
        randomNumbers.push(randomNumber);
      }
      randomMusic.push(this.state.tracks[randomNumbers[i]])
      this.setState({randomMusic})
    }
  }

  resMusic(){
    const resMusic = Math.floor(Math.random() * 3);
    this.setState({
      correct : this.state.randomMusic[resMusic],
    })
  }

  setQuizz(){
      this.setState({
        question: 'Qui interprète ce morceau ?'})
      setTimeout(() => {
        this.setState({
          answers : {
            1: this.state.randomMusic[0].artist.name,
            2: this.state.randomMusic[1].artist.name,
            3: this.state.randomMusic[2].artist.name,
        }
        })
      }, 10000);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({userAnswer: event.target.value});
    console.log(this.state.userAnswer)
    this.setState({
      try: +this.state.try+1,
      show : this.state.show.concat(this.state.correct) ,
    }); 
    if (this.state.try < 3 ){
      for(var i=0; i<3; i++){
        if(event.target.value===this.state.correct.artist.name){
        console.log('good')
        this.setState({point: +this.state.point+1});
        }
        else{
          console.log('bad')
        }
      } 
    } 
    else{
      this.setState({
        question: '',
      answers : {
        1: '',
        2: '',
        3: '',
      },
      })
    }
    if (this.state.try < 2 ) {
      this.setState({
        answers : {
          1: '',
          2: '',
          3: '',
      }
      })
      this.componentDidMount() 
    }
  }

  handleSubmit(event) {
    this.props.history.push('/test')
  }

  render(){
    if (this.state.tracks.length === 0) {
      return null
    } else{

    allAnswers = Object
      .keys(this.state.answers)
      .map(key => <div><label for={this.state.answers[key]} >{this.state.answers[key]}<input  type="radio" value={this.state.answers[key]} name='question'onChange={this.handleChange} id={this.state.answers[key]} ></input></label></div>)
     console.log(this.state.show)

      allCorrectAnswers = Object 
      .keys(this.state.show)
      .map( (track) => 
        <div className='correctAnswer'>
        <img src={this.state.show[track].album.cover_medium}/>
        <div className="correctAnswerInfos"><h2>{this.state.show[track].title}</h2>  <h3>{this.state.show[track].artist.name}</h3></div>
        </div>
      )   


    return(
      <div>
        <p className='point'>{this.state.point}</p>
        <div className='quizz'>
        <audio
        autoPlay
        src={this.state.correct ? this.state.correct.preview : ""}>
        </audio> 
        <h2>{this.state.question}</h2>
          <div className='answer'>
          {allAnswers}
          </div>
        </div>
        <div className="allCorrectAnswers">
         {allCorrectAnswers} 
        </div>
      </div>
    )
    } 
  }
}

export default Quiz;