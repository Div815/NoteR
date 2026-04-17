import React from 'react'
import {Route, Routes} from 'react-router'
import HomePage from './Pages/HomePage'
import NotePage from './Pages/NotePage'
import CreatePage from './Pages/CreatePage'

function App() {
  return (
     <div className="relative h-full w-full">
     
      
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/create' element={<CreatePage/>}/>
         <Route path='/note/:id' element={<NotePage/>}/>
      </Routes>
    </div>
  )
}

export default App