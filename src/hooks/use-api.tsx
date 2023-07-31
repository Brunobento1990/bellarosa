import axios from "axios";
import { useLoader } from "../componets/loader";
import { useNavigate } from "react-router-dom";
import { ISessionInfo, useSessionInfo } from "./use-session-info";

function getSocket() {
    //const baseUrl = "https://localhost:7082/api/"
    const baseUrl = "https://api-server.shop/api/"
    const localAuth = localStorage.getItem('token');
    const auth = localAuth ? localAuth : '';

    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${auth}`,
        }
    })
}

export function useApi() {

    const loader = useLoader();
    const navigate = useNavigate();
    const sessionInfo = useSessionInfo();

    async function login(payload: any) {

        try {

            loader.show();

            const api = getSocket();
            const response : ISessionInfo = (await api.post("login", payload)).data;
            sessionInfo.setSessionInfo(response);
            navigate('/home')

        } catch (error: any) {
            if (error.response) {
                //Modal.show(error.response.data)
                alert(error.response)
            } else {
                //Modal.show("Ocorreu um erro interno, tente novamente mais tarde.")
                alert("Ocorreu um erro interno, tente novamente mais tarde.")
            }
        } finally {
            loader.hide();
        }
    }

    return {
        login
    }

}