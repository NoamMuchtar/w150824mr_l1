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
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}
export default Users;
