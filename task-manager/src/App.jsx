import './App.css'
import {HomePage} from '../src/pages/home/HomePage'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <Routes>
      <Route index  element={<HomePage/>}/>
    </Routes>
  )
}

export default App
