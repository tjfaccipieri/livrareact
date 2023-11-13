import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import FormProduto from './components/produtos/FormProduto';
import { AuthContext, AuthProvider } from './contexts/AuthContext.tsx'
import { useContext } from 'react';

function App() {

  const {usuario} = useContext(AuthContext)

  function RotaProtegida({children}: any) {
    if(usuario.token === '') {
      alert('loga ai')
      return <Navigate to='/login' />
    }

    return children
  }
    
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastroProduto" element={<RotaProtegida><FormProduto /></RotaProtegida>} />
          <Route path="/cadastroProduto/:id" element={<FormProduto />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
