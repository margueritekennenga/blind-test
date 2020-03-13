import React from 'react';
import Quiz from './components/quiz'
import './App.css';
import Themes from './components/theme';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    url : '',
    }
  }
  

  componentDidMount(){
    const handles  = this.props.location.state.url
    this.setState({
        url : handles
    })
  }

render(){
  console.log(this.state.url)
    return (
      <div>
        <h1>Blindtest</h1>
        <Quiz url={this.state.url} /> 
      </div>
    ); 
  }
}
export default App;
