
import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Sec from './Components/Sec';
import './Components/style.css'; 

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Sec/>
      <About />
      <Footer />
    </div>
  );
};

export default App;
