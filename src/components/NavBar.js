export function NavBar({ score, topScore}) {
  return (
    <div className="navbar">
      <h1 className="title">Memory Game</h1>
      <div className="scores">
        <div className="score">Score: {score}</div>
        <div className="top-score">Top Score: {topScore}</div>
      </div>
    </div>
  );
}
