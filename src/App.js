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

function App() {
  // let name = "Noam";
  // let age = 34;
  // let animalImageUrl = "https://images.squarespace-cdn.com/content/v1/54ab2b97e4b08dbf5e1cb50c/827087ca-536f-472e-a0dc-7662e8d30bd3/how+much+does+a+horse+weigh+%281%29.png"
  let developerName = "Webify";

  return (
    <div className="App">
      <Navbar developer={developerName} />
      <header className="App-header">
        {/* <h1 style={{color: "Yellow", fontSize: "44px"}}>Hello {name} {age}</h1> */}
        <Message1 isAdmin={false} />
        <Message2 isAdmin={false} />
        <Message3 isAdmin={false} />
        {/* <Home username={name} /> */}
        <Details />
        {/* <img className="horseImg" src={animalImageUrl} alt="Horse" /> */}
        <Products />
        <Users2 />
        <Photos />
      </header>

      <Footer developer={developerName} />
    </div>
  );
}

export default App;
