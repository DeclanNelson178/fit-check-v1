import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.update = this.update.bind(this);
  }

  async update(value) {
    await this.setState({
      username: value.username,
      password: value.password,
    });
    console.log(this.state.username);
  }

  render() {
    return (
      <div className="App">
        {this.state.username.length <= 0 ? (
          <Login data={this.update.bind(this)} />
        ) : (
          <Home />
        )}
      </div>
    );
  }
}

export default App;
