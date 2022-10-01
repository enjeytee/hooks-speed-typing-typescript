import React from "react";
import useWordGame from "./hooks/useWordGame.jsx";

export default function App() {
    const STARTING_TIME: number = 10;
    const {
        text, 
        isTimerRunning, 
        timeRemaining, 
        wordCount, 
        startGame,
        handleChange,
        textAreaRef,
    } = useWordGame(STARTING_TIME);
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={!isTimerRunning}
                ref={textAreaRef}
            ></textarea>
            <h4>Time remaining: {timeRemaining} seconds</h4>
            <button
                onClick={() => startGame()}
                disabled={isTimerRunning}
            >Start</button>
            <h3>Typing speed per minute: {(wordCount * (60 / STARTING_TIME)).toFixed(2)}</h3>
        </div>
    )
};