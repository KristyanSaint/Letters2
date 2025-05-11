// src/App.jsx
import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import LetterCard from "./components/LetterCard";
import quotes from "./data/quotes.json";
import HeartBurst from "./components/HeartBurst"; // Import the HeartBurst component

// custom hook to track window dimensions
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}

const App = () => {
  const [letter, setLetter] = useState("");
  const [animate, setAnimate] = useState(false);
  const { width, height } = useWindowSize();

  const generateLetter = useCallback(() => {
    // pick random messag
    const idx = Math.floor(Math.random() * quotes.length);
    setLetter(quotes[idx]);

    // trigger animation + heart burst
    setAnimate(true);
    // turn off animation after 2 seconds
    setTimeout(() => setAnimate(false), 2000);
  }, []);

  return (
    <div className="app-container">
      {/* Heart Burst when animate===true */}
      {animate && <HeartBurst />}

      <img
        src="/geget.JPG"
        alt="Mom"
        className="header-image"
      />

      <h1 className="app-title">💌 Letters from Mom <br/> </h1>

      <div className={`letter-wrapper ${animate ? "pop-in" : ""}`}>
        <LetterCard
          title={letter ? "Your Letter" : null}
          content={letter || "Press the button to generate a loving message."}
        />
      </div>

      <button className="generate-btn" onClick={generateLetter}>
        Generate Letters
      </button>
    </div>
  );
};

export default App;
