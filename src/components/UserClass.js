import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "Dummy URL",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + "child Component Did Mount");
    const data = await fetch("https://api.github.com/users/abdul-rahman-n");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Final Call");
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Role: Full Stack Developer</h4>
      </div>
    );
  }
}

export default UserClass;
