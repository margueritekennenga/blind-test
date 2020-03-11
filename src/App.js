import React from 'react';
// import Music from './components/randomMusics'
import Quiz from './components/quiz'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    tracks : "", 
    randomMusic: []
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

  render(){
    return (
      <div>
        <h1>Blindtest</h1>
        <p>{this.state.randomMusic.length  >= 3 ? this.state.randomMusic[0].title : ""}</p>
      <Quiz tracks={this.state.srandomMusic}/> 
      </div>
    ); 
  }
}
export default App;
