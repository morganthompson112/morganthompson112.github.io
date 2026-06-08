import { React } from 'react'
import './App.css'
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Container from "./components/Container.jsx";

function App() {

  return (
    <>
      <Header />

      <HeroBanner />


      <Container style={{
        backgroundColor: "#b3cfe5"
      }}>
        <Projects />
      </Container>

      <Container style={{
        backgroundColor: "#f6fafd"
      }}>
        <Contact />
      </Container>
    </>
  )
}

export default App
