import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isLoggle: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( state => ({
      isLoggle: !state.isLoggle
    }))
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isLoggle? "ON" : "OFF"}
      </button>
    )
  }
}

export default App;
