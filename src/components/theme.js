import React, { Component } from 'react';
class Themes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/1051470831',
      
      

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

  handleSubmit(event) {
    this.props.history.push({pathname:  '/quizz', state: {url: this.state.value}})
  }


  render(){
    return(
      <div className='themes'>
        <h1>BLINDTEST</h1>
        <form onSubmit={this.handleSubmit} className='themes-form'>
        <h2>Je suis expert en ...</h2>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/53362031">POP</option>
          <option value="https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/3272614282">RAP</option>
          <option selected value="https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/1051470831">Variété française (Année 90)</option>
          <option value="https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/1677006641">R&B</option>
        </select>
        <input type="submit" value="Envoyer" />
        </form>
      </div>
    )
  }
}

export default Themes;