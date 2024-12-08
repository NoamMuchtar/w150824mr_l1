// let username = "Noam";

import { useEffect, useState } from "react";

function Details() {
  let [username, setUsername] = useState();

  const handlerInput = (newInput) => {
    // username = newInput;
    setUsername(newInput);
    console.log(username);
  };

  // execute evrey render
  useEffect(() => {
    console.log("Page rendered");
  });

  // execute in first render
  useEffect(() => {
    console.log("First render");
  }, []);

  // execute in specific change
  useEffect(() => {
    console.log("username changed");
  }, [username]);

  return (
    <>
      <label htmlFor="username">User Name:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => handlerInput(e.target.value)}
      />
      <p>{username}</p>
    </>
  );
}

export default Details;
