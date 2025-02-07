// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage';
import { LandingPage } from "./Components/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Router basename='/paradise-nursery/'>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/conference"></Link>
        </nav> */}
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='home/*' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
