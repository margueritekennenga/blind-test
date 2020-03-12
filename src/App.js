import React from 'react';
import Quiz from './components/quiz'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    tracks : "", 
    randomMusic: [],
    response : ''
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
  console.log(resMusic);
  this.setState({
    response : this.state.randomMusic[resMusic],
  })
  console.log(this.state.response)
}
  
  render(){
    return (
      <div>
        <h1>Blindtest</h1>
        <p> response {this.state.response ? this.state.response.artist.name : ""}</p>
        <audio
       autoPlay
        src={this.state.response ? this.state.response.preview : ""}>
        </audio>
      <Quiz tracks={this.state.randomMusic} response={this.state.response}/> 
      </div>
    ); 
  }
}
export default App;
