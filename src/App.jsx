import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'


function App() {
  return (

    <div className='min-vh-100 d-flex flex-column'>
      <Navbar />

      <main className="flex-fill container mt-4">
        <Outlet />
      </main>

      <Footer />
    </div>

  )
}

export default App
