import React from 'react';
import Quiz from './components/quiz'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state  = {
    tracks : "", 
    randomMusic: [],
    response : '',
    thomas: false
  }
  
}
  

componentDidMount(){
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/53362031')
  .then(res => res.json())
  .then(result => {
    this.setState({
      tracks: result.tracks.data,
    })
  }).then(()=>{
    this.randomMusic()
    this.resMusic()
  })

}

thomas = (data) =>{
  this.setState({
    thomas: data
  })
    this.componentDidMount()
}

randomMusic(){
  const randomMusic = [];
  const showRandom = [];
  const randomNumbers = []
  let show = false 

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
    response : this.state.randomMusic[resMusic],
  })
}


  
  render(){
    return (
      <div>
        <h1>Blindtest</h1>
        <audio
        autoPlay
        src={this.state.response ? this.state.response.preview : ""}>
        </audio>
      <Quiz thomas={this.thomas} tracks={this.state.randomMusic} response={this.state.response}/> 
      </div>
    ); 
  }
}
export default App;
