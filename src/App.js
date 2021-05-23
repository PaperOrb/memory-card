import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";

function App() {
  const [cardHistory, setCardHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [urlArr, setUrlArr] = useState([
    "bellsprout",
    "bullbasaur",
    "charmander",
    "eevee",
    "jigglypuff",
    "meowth",
    "pika",
    "psyduck",
    "snorlax",
    "squirtle",
    "star",
    "ultra-ball",
  ]);

  let renderCards = () => {
    let cardsArr = urlArr.map((url, index) => {
      let randNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      return <Card order={{ order: randNum }} url={url} handleClick={handleClick} />;
    });
    return cardsArr;
  };

  let handleClick = (event) => {
    const cardName = event.target.getAttribute("data-cardname");
    let validCard = !cardHistory.includes(cardName);
    setCardHistory((prevHistory) => {
      return [...prevHistory, cardName];
    });
    if (validCard) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore(0);
      setCardHistory([]);
    }
  };

  return (
    <div>
      <NavBar score={score} />
      <main>
        <div className="card-grid">{renderCards()}</div>
      </main>
    </div>
  );
}

export default App;
