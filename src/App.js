import "./App.css";
import Navbar from "./container/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./container/Profile";
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />          
        </div>
      </Router>
      <Profile></Profile>
    </>
  );
}

export default App;
