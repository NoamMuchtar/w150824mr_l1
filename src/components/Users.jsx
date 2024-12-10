import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function Users() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(users);
  return (
    <>
      <h2>Users</h2>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}s</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}
export default Users;
