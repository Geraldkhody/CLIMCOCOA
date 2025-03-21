import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import Layout from './Components/Layout/Layout'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
