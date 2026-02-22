import Navbar from './components/navbar'

import './App.css'
import Home from './pages/home'

function App() {


  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="home">
        <Home />
      </div>
      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App;