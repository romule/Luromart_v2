import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import MyServices from './pages/MyServices'
import MyWorksAndExhibition from './pages/MyWorksAndExhibition'
import Contacts from './pages/Contacts'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Main</Link> |{' '}
        <Link to="/about-me">About me</Link> |{' '}
        <Link to="/my-services">My services</Link> |{' '}
        <Link to="/my-works-and-exhibition">My works and exhibition</Link> |{' '}
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-services" element={<MyServices />} />
        <Route path="/my-works-and-exhibition" element={<MyWorksAndExhibition />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;