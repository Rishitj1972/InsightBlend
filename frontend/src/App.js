import React from 'react'
import Admin from './Admin/App'
import User from './User/App'
import Showrunner from './Showrunner/App'
import Guest from './Guest/App'

import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/Admin/*' element={<Admin/>}/>
        <Route path='/User/*' element={<User/>}/>
        <Route path='/ShowRunner/*' element={<Showrunner/>}/>
        <Route path='/*' element={<Guest/>}/>
      </Routes>
    </div>
  )
}

export default App