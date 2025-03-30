import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/Footer';
import Auth from './components/Auth'

const App = () => {
  
  return (
    <Router>
       <Header />
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/auth" element={<Auth />}/>
       </Routes>
       <Footer />
    </Router>
  );
};

export default App;
