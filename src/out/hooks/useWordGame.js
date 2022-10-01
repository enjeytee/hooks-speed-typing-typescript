"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useWordGame(defaultStartTime = 5) {
    const [text, setText] = (0, react_1.useState)("");
    const [wordCount, setWordCount] = (0, react_1.useState)(0);
    const [isTimerRunning, setIsTimerRunning] = (0, react_1.useState)(false);
    const [timeRemaining, setTimeRemaining] = (0, react_1.useState)(defaultStartTime);
    const textAreaRef = (0, react_1.useRef)(null);
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const calculateWordCount = (words) => {
        const numberOfWords = words.split(" ").filter(e => String(e).trim()).length;
        return numberOfWords;
    };
    const startGame = () => {
        setIsTimerRunning(true);
        if (textAreaRef.current) {
            textAreaRef.current.disabled = false;
            textAreaRef.current.focus();
        }
        ;
        if (timeRemaining === 0) {
            setTimeRemaining(defaultStartTime);
            setText("");
            setWordCount(0);
        }
        ;
    };
    const endGame = () => {
        setWordCount(calculateWordCount(text));
        setIsTimerRunning(false);
    };
    (0, react_1.useEffect)(() => {
        if (timeRemaining > 0 && isTimerRunning) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1);
            }, 1000);
        }
        else if (timeRemaining === 0) {
            endGame();
        }
        ;
    }, [timeRemaining, isTimerRunning]);
    return {
        text,
        isTimerRunning,
        timeRemaining,
        wordCount,
        startGame,
        handleChange,
        textAreaRef
    };
}
exports.default = useWordGame;
;
//# sourceMappingURL=useWordGame.js.map