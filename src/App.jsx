// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import Home from './pages/Home'
function App() {

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <ProjectCard/>
        
      </main>
      <Footer/>
    </>
  )
}

export default App
