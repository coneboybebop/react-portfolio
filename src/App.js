import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className>
      <header>
        <Header />
      </header>
      <body>
        <Portfolio />
        <Contact />
        <About />
      </body>
      <Footer />
    </div>
    
  );
}

export default App;
