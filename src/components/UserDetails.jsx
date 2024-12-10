import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UserDetails() {
  let { id } = useParams();
  let user = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   let [user, setUser] = useState({});

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then((response) => response.json())
  //       .then((userInfo) => setUser(userInfo));
  //   }, []);

  return (
    <>
      <h2>User {id} Details</h2>
      <p>Name: {user.name}</p>
      <p>user name: {user.username}</p>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
    </>
  );
}

export default UserDetails;
