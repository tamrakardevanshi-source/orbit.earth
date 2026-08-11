import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Explore from './components/Explore/Explore'
import Future from './components/Future/Future'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <main className="app">
      <Navbar />
       <Hero />
       <Explore />
       <About />
       <Future/>
        <Footer />
    </main>
  )
}

export default App