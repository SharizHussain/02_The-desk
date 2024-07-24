import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import App from './App'

export default function Router() {

  return (
    <BrowserRouter>
        <Routes>
                <Route index element={<App/>}/>
                <Route path='/manual' element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
