import React from "react";
import ReactDOM from "react-dom/client";

// handle form submit event
function Form() {
  function handleSubmit() {
    // canceled after button click event, won't excute
    console.log("You clicked submit.");
  }

  function btnOnclick(e) {
    // cancel events after this event, inner event will excute first
    e.preventDefault();
    alert("Yoooooooooooo");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" onClick={btnOnclick}>
        Submit
      </button>
    </form>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

// 另外可以用 public class field 來正確的綁定 callback：
class LoggingButton extends React.Component {
  // 這個語法確保 `this` 是在 handleClick 中被綁定。
  handleClick = () => {
    console.log("this is: ", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

// 如果你並沒有使用 class field 的語法的話，你則可以在 callback 中使用 arrow function：
// 如果這個 callback 被當作一個 prop 傳給下層的 component 的話，其他的 component 也許會做些多餘的 re-render
class LoggingButtonArrowFunc extends React.Component {
  handleClick() {
    console.log("this is: ", this);
  }

  render() {
    // 這個語法確保 `this` 是在 handleClick 中被綁定：
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}

// e 這個參數所代表的 React 事件將會被當作 ID 之後的第二個參數被傳遞下去。在使用 arrow function 時，我們必須明確地將它傳遞下去，但若使用 bind 語法，未來任何的參數都將會自動被傳遞下去。
class DeleteButton extends React.Component {
  render() {
    return (
      <>
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Toggle />);
// root.render(<LoggingButton />);
root.render(<LoggingButtonArrowFunc />);
