import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Categorias } from "./pages/categorias";
import { Favoritos } from "./pages/favoritos";
import { MinhaConta } from "./pages/minhaconta";
import { PageCarrinho } from "./pages/carrinho";
import { Login } from "./pages/login";
import { Layout } from './componets/layout'
import { UsuraioCreate } from "./pages/usuario/create";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/usuario/cadastrar' element={<UsuraioCreate />} />
            <Route path='/categorias' element={<Layout><Categorias /></Layout>} />
            <Route path='/favoritos' element={<Layout><Favoritos /></Layout>} />
            <Route path='/minha-conta' element={<Layout><MinhaConta /></Layout>} />
            <Route path='/carrinho' element={<Layout><PageCarrinho /></Layout>} />
            <Route path='/home' element={<Layout><Home /></Layout>} />
        </Routes>
    );
}