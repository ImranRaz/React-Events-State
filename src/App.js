import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickReduce = this.handleClickReduce.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleClickReduce() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  render() {
    return (
      <div clasName="container">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Raise!</button>
        <button onClick={this.handleClickReduce}>Reduce</button>
      </div>
    );
  }
}
export default App;
