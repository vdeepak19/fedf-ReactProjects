import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import Page1 from './components/Page1.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Homepage/>}>Home</Route>
  <Route path='/p' element={<Page1/>}>Page1</Route>
</Routes>
</BrowserRouter>
)
