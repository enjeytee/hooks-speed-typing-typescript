"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useWordGame_jsx_1 = __importDefault(require("./hooks/useWordGame.jsx"));
function App() {
    const STARTING_TIME = 10;
    const { text, isTimerRunning, timeRemaining, wordCount, startGame, handleChange, textAreaRef, } = (0, useWordGame_jsx_1.default)(STARTING_TIME);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "How fast do you type?"),
        react_1.default.createElement("textarea", { onChange: handleChange, value: text, disabled: !isTimerRunning, ref: textAreaRef }),
        react_1.default.createElement("h4", null,
            "Time remaining: ",
            timeRemaining,
            " seconds"),
        react_1.default.createElement("button", { onClick: () => startGame(), disabled: isTimerRunning }, "Start"),
        react_1.default.createElement("h3", null,
            "Typing speed per minute: ",
            (wordCount * (60 / STARTING_TIME)).toFixed(2))));
}
exports.default = App;
;
//# sourceMappingURL=App.js.map