import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Screens/About/Summary'
import Contact from './Screens/Contact/Contact'
import AboutLayout from './Components/Layout/AboutLayout'
import State_of_Art from './Screens/About/State_of_Art'
import ProjectMembers from './Screens/People/ProjectMembers'
import MemberDetails from './Screens/People/MemberDetails'
import Research from './Screens/Project/Research'
import Publications from './Screens/Resource/Publications'
import FieldWorks from './Screens/Project/FieldWorks'
import ProjectLayout from './Components/Layout/ProjectLayout'
import Partners from './Screens/People/Partners'

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

            <Route path='publications' element={<Publications />} />

            <Route path='project/' element={<ProjectLayout />} >
              <Route path='research' element={<Research />} />
              <Route path='field-works' element={<FieldWorks />} />
            </Route>

            <Route path='people'>
              <Route path='Partners' element={<Partners />} />
              <Route path='project-members' element={<ProjectMembers />} />
              <Route path='project-members/:id' element={<MemberDetails />} />
            </Route>

            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
