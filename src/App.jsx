import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import styles from "./App.module.scss";
import { Contact } from "./components/pages/Contact page/Contact";
import Header from "./components/partials/Header/Header";
import Footer from "./components/partials/Footer/Footer";
import About from "./components/pages/About Page/About";
import Restaurants from "./components/pages/Restaurants/Restaurants";

function App() {
  return (
    <section className={styles.wrapper}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/about" index element={<About />} />
          <Route path="/restaurants" index element={<Restaurants />} />
          <Route path="/contact" index element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
