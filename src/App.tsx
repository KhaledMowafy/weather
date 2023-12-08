
import './App.css'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="bg-[url('./assets/weather.png')] w-full  h-screen bg-cover bg-no-repeat bg-center">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/"/>
        </Routes>
     </Router>
      </div>
    </>
  )
}

export default App
