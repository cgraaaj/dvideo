import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  const [video, setVideo] = useState(
    "https://m.youtube.com/watch?v=3176Sw8A0EE"
  );
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div className="parent">
        <div
          className="myvid"
        >
          <ReactPlayer
            controls
            url={video}
            onProgress={(e) => {
              if (Math.round(e.played * 100) > 50) {
                setShow(true);
              } else {
                setShow(false);
              }
            }}
          />
        </div>
        <div className="google">
          <button
            style={{ display: show ? null : "none" }}
            onClick={() => {
              window.open("https://www.google.com", "_self");
            }}
          >
            {" "}
            google{" "}
          </button>
        </div>
        <div className="prev">
          <button
            disabled={
              "https://m.youtube.com/watch?v=1zJ9FnQXmJI" === video
                ? true
                : false
            }
            style={{ display: show ? null : "none" }}
            onClick={() => {
              setVideo("https://m.youtube.com/watch?v=1zJ9FnQXmJI");
            }}
          >
            prev
          </button>
        </div>
        <div className="next">
          <button
            disabled={
              "https://m.youtube.com/watch?v=WYeFqSjvGaY" === video
                ? true
                : false
            }
            style={{ display: show ? null : "none" }}
            onClick={() => {
              setVideo("https://m.youtube.com/watch?v=WYeFqSjvGaY");
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
