import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./VideoList";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <h2>caio</h2>
      <VideoList />
    </div>
  );
}

export default App;
