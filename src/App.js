import React from 'react';
// import Music from './components/randomMusics'
import Quiz from './components/quiz'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    tracks : "", 
  }

componentDidMount(){
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/53362031')
  .then(res => res.json())
  .then(result => {
    this.setState({
      tracks: result.tracks.data,
  })
  })
}

  render(){
    const randomMusic = [];
    const showRandom = [];
    const randomNumbers = []
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * this.state.tracks.length);
      if (randomNumbers.indexOf(randomNumber) === -1) { 
        randomNumbers.push(randomNumber);
      }
      randomMusic.push(this.state.tracks[randomNumbers[i]]) ; 
    }
    console.log(randomMusic)
  
    return (
      <div>
        <h1>Blindtest</h1>
      <Quiz tracks={randomMusic}/> 
      </div>
  ); 
  }
}
export default App;
