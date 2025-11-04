import { HashRouter as Router } from "react-router-dom";
import { Routing } from "./components/Routing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routing />
    </Router>
  );
}

export default App;
