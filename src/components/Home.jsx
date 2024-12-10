function Home({ username }) {
  const welcomeHandler = () => {
    console.log("Welcome Noam");
  };

  const welcomeHandler2 = (userName) => {
    console.log("welcome " + userName);
  };
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={welcomeHandler} className="btn btn-success">
        Click me!
      </button>
      <button
        onClick={() => {
          welcomeHandler2(username);
        }}
        className="btn btn-success"
      >
        Click me 2!
      </button>
    </>
  );
}

export default Home;
