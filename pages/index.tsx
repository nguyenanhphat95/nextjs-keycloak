import React from "react";

const Home = () => {
  return (
    <div>
      Home page
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}
      >
        Throw error
      </button>
    </div>
  );
};

export default Home;
