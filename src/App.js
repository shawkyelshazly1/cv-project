import "./App.css";
// import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App h-screen flex flex-col bg-gray-200">
      <Navbar />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
