import { Routes, Route } from 'react-router-dom'
import Benefits from './pages/Benefits'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Jobs from './pages/Jobs'
import Job from './pages/Job'
import Team from './pages/Team'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:slug" element={<Job />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}