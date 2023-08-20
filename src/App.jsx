import { Link, Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="main-container">
      <div className="navbar">
        <Link to="/">
          <h1 className="logo">creatorverse</h1>
        </Link>
        <div className="subnav">
          <Link id="subnav-home-btn" to="/">
            <button>
              Home
            </button>
          </Link>
          <Link to="/creators/add">
            <button>
              Add a Creator
            </button>
          </Link>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default App
