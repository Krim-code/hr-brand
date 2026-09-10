import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-[#002D74]">
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}