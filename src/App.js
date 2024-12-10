import mylogo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Details from "./components/Details";
import Message1 from "./components/Message1";
import Message2 from "./components/Message2";
import Message3 from "./components/Message3";
import Products from "./components/Products";
import Photos from "./components/Photos";
import Users2 from "./components/Users2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "./components/Notfound";
import UserDetails from "./components/UserDetails";
import NewUser from "./components/NewUser";

function App() {
  let name = "Noam";
  let age = 34;
  let animalImageUrl =
    "https://images.squarespace-cdn.com/content/v1/54ab2b97e4b08dbf5e1cb50c/827087ca-536f-472e-a0dc-7662e8d30bd3/how+much+does+a+horse+weigh+%281%29.png";
  let developerName = "Webify";

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={name} />} />
          <Route path="/products" element={<Products />} />

          <Route path="/users">
            <Route index element={<Users2 />} />
            <Route path=":id" element={<UserDetails />} />
            <Route path="new" element={<NewUser />} />
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
      <Footer developer={developerName} />
    </div>
  );
}

export default App;
