
import { Routes, Route } from 'react-router-dom'
import DebounceServies from "./components/DebounceServies"
import ResizeAndAdd from './components/ResizeAndAdd'
import ThrottleServies from './components/ThrottleServies'

import './App.css'

function App() {



  return (
    <>

      <Routes>
        <Route path='/' element={<ResizeAndAdd />} />
        <Route path='/debounce' element={<DebounceServies />} />
        <Route path='/throttle' element={<ThrottleServies />} />

        <Route path='*' element="404" />
      </Routes >

    </>
  )
}

export default App
