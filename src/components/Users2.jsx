import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getAllUser } from "../services/userService";
import { useState } from "react";
function Users2() {
  // const users = useFetch("https://jsonplaceholder.typicode.com/users");
  let [users, setUsers] = useState([]);
  getAllUser().then((result) => setUsers(result.data));
  return (
    <>
      <h2>Users</h2>

      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}
export default Users2;
