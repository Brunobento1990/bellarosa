import { Avatar, Box, Paper, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

export function Menu() {

    const navigate = useNavigate();

    return (
        <>
            <Box
                component={Paper}
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                sx={{
                    position: 'fixed',
                    backgroundColor: '#fff',
                    height: '8vh',
                    bottom: 0,
                    width: '100%'
                }}
            >
                <HomeIcon
                    onClick={() => navigate('/home')}
                />
                <AppsIcon
                    onClick={() => navigate('/categorias')}
                />
                <Box
                    sx={{
                        height: '70px',
                        width: '70px',
                        borderRadius: '50%',
                        marginBottom: '30px',
                        backgroundColor: '#efdbeb',
                        border: '1px solid #acacac'
                    }}
                >
                    <ShoppingCartIcon
                        onClick={() => navigate('/carrinho')} 
                        sx={{
                            height: '30px',
                            width: '30px',
                            margin:'20px',
                            position:'relative'
                        }}
                    />
                    <Typography
                        sx={{
                            height: '20px',
                            width: '30px',
                            borderRadius:'10px',
                            backgroundColor: '#fa93be',
                            textAlign:'center',
                            margin:'-65px 45px',
                            position:'absolute'
                        }}
                    >
                        1
                    </Typography>
                </Box>
                <FavoriteIcon
                    onClick={() => navigate('/favoritos')}
                />
                <Avatar
                    sx={{
                        height: '30px',
                        width: '30px'
                    }}
                    onClick={() => navigate('/minha-conta')}
                />
            </Box>
        </>
    );
}