import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

//import App from './App.tsx'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Lista_Servico from './pages/listaServiço'
import CadastroDev from './pages/Cadastro_Dev'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/listaServico" element={<Lista_Servico />} />
        <Route path='ListaDev' element={<CadastroDev/>}></Route>
              

      </Routes>
      {/*  <Footer/> */}
      <Home/>
    </BrowserRouter>
   </React.StrictMode>,
)