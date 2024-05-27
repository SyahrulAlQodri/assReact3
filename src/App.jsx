import About from "./componen/About";
import Footer from "./componen/Footer";
import Menu from "./componen/Menu";
import Navbar from "./componen/Navbar";
import Recomended from "./componen/Recomended";
import Welcome from "./componen/welcome";


const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Menu />
      <div>
      <Recomended />
      </div>
      <Footer />
    </div>
    
  )
}

export default App;