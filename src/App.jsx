import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
