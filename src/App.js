import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/history" element={<History />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
