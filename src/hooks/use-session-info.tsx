
export interface ISessionInfo {
    token: string;
    sessionInfo: {
        nome: string;
        avatar: string;
    }
}

export function useSessionInfo() {

    function setSessionInfo(sessionInfo: ISessionInfo) {
        window.localStorage.setItem('token', sessionInfo.token)
        window.localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo.sessionInfo))
    }

    return{
        setSessionInfo
    }

}