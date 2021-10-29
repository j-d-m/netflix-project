import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    //this is using a fragment to wrap the Navbar Component
    <>
      <Navbar />
      <main className="Container">
        Main
        <Section />
        <Section />
        <Section />
      </main>
      <Footer />
    </>
  );
}

export default App;
