import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/TvShows/TvShows";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    //this is using a fragment to wrap the Navbar Component
    <>
      <Navbar />
      <main className="Container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tv-shows" element={<TvShows />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
