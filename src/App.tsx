import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FormProduto from './components/produtos/FormProduto';
import { AuthContext } from './contexts/AuthContext.tsx';
import { CarrinhoProvider } from './contexts/CarrinhoContext.tsx';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

function App() {
  const { usuario } = useContext(AuthContext);

  function RotaProtegida({ children }: any) {
    if (usuario.token === '') {
      alert('loga ai');
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastroProduto" element={ <RotaProtegida> <FormProduto /> </RotaProtegida> }>
            <Route path=":id" element={<FormProduto />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CarrinhoProvider>
  );
}

export default App;
