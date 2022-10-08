import React from "react";
import ReactDOM from "react-dom/client";

function formatDate(date) {
  return date.toLocaleDateString();
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={this.props.author.avatarUrl}
            alt={this.props.author.name}
          />
          <div className="UserInfo-name">{this.props.author.name}</div>
        </div>
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
