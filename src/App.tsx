import { Routes, Route, Link } from 'react-router'
import './App.css'

import OAuthTestPage from "./OAuthTestPage"

export default function App() {

  return (
    <div id="app">
      <nav style={{display: "block", height: "50px", backgroundColor: "#222"}}>
        <ul style={{listStyle: "none"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<OAuthTestPage  />} />
      </Routes>
    </div>
    
  )
}
