import './App.scss';
import { Navbar, Footer } from './components';
import { Banner,  About, Foods, Testimonial, Questions, Contact } from './container';
import { LearnBanner } from './container';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Foods />
      <Testimonial />
      <Questions />
      <LearnBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
