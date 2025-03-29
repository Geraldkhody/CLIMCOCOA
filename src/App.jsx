import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Screens/About/Summary'
import Contact from './Screens/Contact/Contact'
import AboutLayout from './Components/Layout/AboutLayout'
import State_of_Art from './Screens/About/State_of_Art'
import Resource from './Screens/Resource/Resource'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about/' element={<AboutLayout />}>
              <Route path='summary' element={<About />} />
              <Route path='state_of_art' element={<State_of_Art />} />
            </Route>
            <Route path='resource' element={<Resource />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
