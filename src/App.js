import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      salary: "",
      age: ""
    };
  }
  submit() {
    console.log(this.state);
    let url = "http://dummy.restapiexample.com/api/v1/create";
    let data = this.state;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(result => {
      result.json().then(resp => {
        console.log("resp", resp);
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Simple POST API Example</h1>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={data => {
            this.setState({ name: data.target.value });
          }}
        />
        <br />
        <input
          type="text"
          value={this.state.salary}
          name="salary"
          onChange={data => {
            this.setState({ salary: data.target.value });
          }}
        />{" "}
        <br />
        <input
          type="text"
          value={this.state.age}
          name="age"
          onChange={data => {
            this.setState({ age: data.target.value });
          }}
        />{" "}
        <br />
        <button
          onClick={() => {
            this.submit();
          }}
        >
          Submit Data
        </button>
      </div>
    );
  }
}

export default App;
