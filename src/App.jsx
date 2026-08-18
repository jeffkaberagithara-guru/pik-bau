import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Leistungen from "./components/Leistungen";
import Referenzen from "./components/Referenzen";
import Partner from "./components/Partner";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Leistungen />
        <Referenzen />
        <Partner />
        <Contact />
      </main>
    </>
  );
}

export default App;
