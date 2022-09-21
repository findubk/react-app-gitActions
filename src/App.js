import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [list, setlist] = useState([]);

  useEffect(() => {
    (() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((data) => setlist(data))
        .catch((e) => console.log(e));
    })();
  }, []);

  return (
    <div className="App">
      {list.map((el) => (
        <div>{el.title}</div>
      ))}
    </div>
  );
}

export default App;
