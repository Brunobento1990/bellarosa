import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Categorias } from "./pages/categorias";
import { Favoritos } from "./pages/favoritos";
import { MinhaConta } from "./pages/minhaconta";
import { PageCarrinho } from "./pages/carrinho";
import { Login } from "./pages/login";

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categorias' element={<Categorias />} />
            <Route path='/favoritos' element={<Favoritos />} />
            <Route path='/minha-conta' element={<MinhaConta />} />
            <Route path='/carrinho' element={<PageCarrinho />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}