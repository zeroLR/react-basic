import React from "react";
import ReactDOM from "react-dom/client";

function ListItem(props) {
  const value = props.value;
  return (
    // 錯！ 不需要在這裡指出 key
    // <li key={value.toString()}>{value}</li>
    // 對！ 不需要在這裡指出 key
    <li>{props.value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // 錯！ 應該在這裡指出 key
    // <ListItem value={number}/>
    // 對！ key 應該在 array 內被指定
    <ListItem key={number.toString()} value={number} />
  ));

  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

function Post(props) {
  return <li key={props.id}>{props.title}</li>;
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </ul>
  );

  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <br />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<NumberList numbers={numbers} />);
root.render(<Blog posts={posts} />);
