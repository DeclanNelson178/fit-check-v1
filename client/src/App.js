import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: "",
    };
    this.update = this.update.bind(this);
  }

  async update(value) {
    await this.setState({
      jwt: value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        {this.state.jwt.length <= 0 ? (
          <Login data={this.update.bind(this)} />
        ) : (
          <Home jwt={this.state.jwt} />
        )}
      </div>
    );
  }
}

export default App;
