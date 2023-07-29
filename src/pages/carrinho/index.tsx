import { useEffect } from "react";
import { useAuthApp } from "../../hooks/use-auth-app";
import { useNavigate } from "react-router-dom";

export function PageCarrinho(){
    
    const authApp = useAuthApp();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(authApp.auth().token)
        if(!authApp.auth().token){
            navigate('/login')
        }
    },[])
    return(<p>carrinho</p>);
}