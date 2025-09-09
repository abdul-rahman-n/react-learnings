import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>This is About Page</h1>
        <h2>some more about us content</h2>
        <UserClass name={"FIRST"} location={"Pallavaram (Class)"} />
      </div>
    );
  }
}

export default About;
