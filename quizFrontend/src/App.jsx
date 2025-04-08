import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Choose from "./components/Choose";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isSelectorPage = location.pathname === "/choose";

  return (
    <>
      {!isSelectorPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choose" element={<Choose/>} />
        <Route path="/start" element={<StartQuiz/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
      {!isSelectorPage && <Footer />}
    </>
  );
};

export default App;
