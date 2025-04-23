import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/ui/Layout'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          {/* <Route path='/search' element={<Search />} />
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='*' element={<NotFound />}/>               */}
        </Route>
      </Routes>
    </>
  )
}

export default App