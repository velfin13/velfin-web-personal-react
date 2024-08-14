import Header from "./components/Header";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Skills from "./components/Main/Skills/Skills";
import Portfolio from "./components/Main/Portfolio";
import Contactme from "./components/Main/Contactme";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Curriculum from "./components/Curriculum/Curriculum";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("idioma") ?? "en"
  );

  useEffect(() => {
    localStorage.setItem("idioma", language ?? "en");
  }, [language]);


  return (
    <>
      <Header lng={language} setLanguage={setLanguage} />
      <main className="main">
        <Home lng={language} />
        <About lng={language} />
        <Curriculum lng={language}/>
        <Skills lng={language} />
        <Portfolio lng={language} />
        <Contactme lng={language} />
      </main>
      <Footer lng={language} />
    </>
  );
}

export default App;
