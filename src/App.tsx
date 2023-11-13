import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import FormProduto from './components/produtos/FormProduto';

function App() {

  const {usuario} = useContext(AuthContext)

  function ProtectedRoute({children}: any) {
    if(usuario.token === '') {
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
          {/* <Route path="/perfil" element={<ProtectedRoute><Perfil /></ProtectedRoute>} /> */}
          <Route path="/cadastroProduto" element={<FormProduto />} />
          <Route path="/cadastroProduto/:id" element={<FormProduto />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
