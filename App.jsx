import React from "react";
import Intro from "./Intro.jsx";
import Quiz from "./Quiz.jsx";

export default function App() {
const [gameStart, setGameStart] = React.useState(false);
const [quiz, setQuiz] = React.useState([]);

async function renderGame() {
    const res = await fetch(
    "https://opentdb.com/api.php?amount=5&type=multiple"
    );
    const data = await res.json();
    setQuiz(data.results);
    setGameStart(true);
}

return (
    <main>
    {!gameStart && <Intro onClick={renderGame} />}

    {gameStart && <Quiz data={quiz} reload={renderGame} />}
    </main>
);
}
