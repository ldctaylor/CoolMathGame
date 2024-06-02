function PlayAgain({ onClick, gameStatus }) {
  return (
    <>
      <button
        type="text"
        className="heading"
        style={{
          width: "10rem",
          height: "10rem",
          marginTop: "3rem",
          color: gameStatus === "won" ? "green" : "red",
        }}
        onClick={onClick}
      >
        <p>Game is {gameStatus}</p>
        <h1>Play again!</h1>
      </button>
    </>
  );
}

export default PlayAgain;
