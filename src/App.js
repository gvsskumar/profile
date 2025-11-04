import { HashRouter as Router } from "react-router-dom";
import { Routing } from "./components/Routing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routing />
      <Footer />
    </Router>
  );
}

export default App;
