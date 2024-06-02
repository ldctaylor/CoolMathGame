import React from "react";

function Welcome({ numberOfPlays }) {
  return (
    <section className="heading">
      <h1>Welcome to the really cool Maths game!</h1>
      <p>Round {numberOfPlays} </p>
    </section>
  );
}

export default Welcome;
