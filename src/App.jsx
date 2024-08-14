import Header from "./components/Header";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Skills from "./components/Main/Skills/Skills";
import Portfolio from "./components/Main/Portfolio";
import Contactme from "./components/Main/Contactme";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Curriculum from "./components/Curriculum/Curriculum";
import { useTranslation } from "react-i18next";

function App() {

  const [_, i18n] = useTranslation("global");

  const [language, setLanguage] = useState(
    localStorage.getItem("idioma") ?? "en"
  );

  useEffect(() => {
    localStorage.setItem("idioma", language ?? "en");
    i18n.changeLanguage(language)
  }, [language]);


  return (
    <>
      <Header lng={language} setLanguage={setLanguage} />
      <main className="main">
        <Home />
        <About />
        <Curriculum />
        <Skills />
        <Portfolio />
        <Contactme />
      </main>
      <Footer />
    </>
  );
}

export default App;
