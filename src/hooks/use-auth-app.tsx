export function useAuthApp(){

    function auth(){
        let token = window.localStorage.getItem('token');

        return{
            token
        }
    }

    return {
        auth
    }
}