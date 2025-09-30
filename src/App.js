import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
        <Outlet /> {/* this renders About, Skills, Projects, etc. */}
      <Footer />
    </div>
  );
}

export default App;
