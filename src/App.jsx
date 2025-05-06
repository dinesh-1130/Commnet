import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Aboutsection from './components/Aboutsection'
import Ourservices from './components/Ourservices'
import Ourvision from  './components/Ourvision'
import Callus from './components/Callus'
import Wework from './components/Wework'
import Reviewus from './components/Reviewus'
import Ourpartner from './components/Ourpartner'
import Footer from './components/Footer'
function App() {
  return (
    <div className="font-['Lato'] relative">
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Ourservices />
      <Ourvision />
      <Callus />
      <Wework />
      <Reviewus />
      <Ourpartner />
      <Footer />
    </div>
  );
}

export default App;
