import Hero from './components/Hero'
import About from './components/About'
import AIEntities from './components/AIEntities'
import Technology from './components/Technology'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-maori-dark text-white">
      <Hero />
      <About />
      <AIEntities />
      <Technology />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
