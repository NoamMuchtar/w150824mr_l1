import { useNavigate } from "react-router-dom";

function Notfound() {
  let nav = useNavigate();
  return (
    <>
      <h4>404 - Page Not Found!</h4>

      <button className="btn btn-primary" onClick={() => nav("/")}>
        Home
      </button>
      <button className="btn btn-warning" onClick={() => nav(-1)}>
        Back
      </button>
    </>
  );
}

export default Notfound;
