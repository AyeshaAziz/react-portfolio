import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Introduction } from "./components/Introduction/Introduction";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Navbar />
        <Introduction />
        <About/>
        <Experience/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
