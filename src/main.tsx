import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

// import App from './App'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import ListaDevs from './pages/ListaDev'
import ListaServicos from './pages/ListaServiço'
import Footer from './components/Footer'
import CadastroDev from './pages/CadastroDev'
import CadastroServ from './pages/CadastroServico'
import Login from './pages/Login'
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServiço'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServico'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='listadevs' element={ <ListaDevs /> } />
        <Route path='listaservicos' element={ <ListaServicos /> } />
        <Route path='cadastrodev' element={ <CadastroDev /> } />
        <Route path='cadastroserv' element={ <CadastroServ /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='perfil/:idUsuario' element={<PerfilUsuario />} />
        <Route path='visualizarservico' element={<VisualizarServico />} />
        <Route path='cadastrousuario' element={<CadastroUsuario />} />
        <Route path='cadastroservico' element={<CadastroServico/>} />

     
      </Routes>
      <Footer />      
    </BrowserRouter>
  </React.StrictMode>
)
