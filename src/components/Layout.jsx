
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
  return (
    <div className="noise min-h-screen bg-[#080808]">
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

