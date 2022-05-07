import React, { Component } from "react";
class About extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Ayaz",
      age: 25,
      // console.warn("I am a constructor");
    };
  }
  componentDidMount() {
    console.warn("I am Did Mount");
  }
  render() {
    let anb = "contact us let data";
    return (
      <div>
        {/* <h2>{anb}</h2>
        <h3>{this.state.name}</h3>
        <h1>Hello world</h1>
        <button
          onClick={() => {
            this.setState({ name: "Wali Muhammad" });
          }}
        >
          Update
        </button> */}
      </div>
    );
  }
}
export default About;

// life cycle

// constructor()
// {

// }

// ComponentDidMount(){

// }
// ComponentDidUpdate(){

// }
