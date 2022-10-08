import React from "react";
import ReactDOM from "react-dom/client";

function formatDate(date) {
  return date.toLocaleDateString();
}

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
  }
  render() {
    return (
      <img className="Avatar" src={this.user.avatarUrl} alt={this.user.name} />
    );
  }
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
  }
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.user} />
        <div className="UserInfo-name">{this.user.name}</div>
      </div>
    );
  }
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author} />
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">{formatDate(this.props.date)}</div>
      </div>
    );
  }
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Comment {...comment} />);
