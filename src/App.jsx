import './styles/App.css'
import './styles/global.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import ProjectCard from './components/ProjectCard'
import Projects from './pages/Projects'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <Header/>
      <main className='mainContainer'>
        <Home/>
        <About/>
        {/* <ProjectCard/> */}
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
