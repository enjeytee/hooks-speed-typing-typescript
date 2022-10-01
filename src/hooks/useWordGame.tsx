import { useState, useRef, ChangeEvent, useEffect } from "react";

export default function useWordGame(defaultStartTime = 5) {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(defaultStartTime);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }
    const calculateWordCount = (words: string): number => {
        const numberOfWords: number = words.split(" ").filter(e => String(e).trim()).length
        return numberOfWords
    };
    const startGame = () => {
        setIsTimerRunning(true);
        if (textAreaRef.current) {
            textAreaRef.current.disabled = false;
            textAreaRef.current.focus();
        };
        if (timeRemaining === 0) {
            setTimeRemaining(defaultStartTime);
            setText("");
            setWordCount(0);
        };
    };
    const endGame = () => {
        setWordCount(calculateWordCount(text));
        setIsTimerRunning(false);
    };
    useEffect(() => {
        if (timeRemaining > 0 && isTimerRunning) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            endGame();
        };
    }, [timeRemaining, isTimerRunning]);
    return {
        text, 
        isTimerRunning, 
        timeRemaining, 
        wordCount, 
        startGame,
        handleChange,
        textAreaRef
    }
};