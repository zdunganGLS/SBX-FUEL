import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Authenticated from "./pages/Authenticated";
import Admin from "./pages/Admin";
import Queues from "./pages/Queues";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Change those page links for when we deploy, since static app runs off / folder and local runs off /src
// if (process.env.NODE_ENV === 'development') {
//   Anonymous = "./pages/anonymous";
//   Authenticated = "/src/pages/authenticated";
//   Admin = "/src/pages/admin";
// }

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authenticated" element={<Authenticated />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/queues" element={<Queues />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
