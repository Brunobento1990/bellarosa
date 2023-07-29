import { Avatar, Box, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
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
                    onClick={() => navigate('/')}
                />
                <AppsIcon 
                    onClick={() => navigate('/categorias')}
                />
                <FavoriteIcon
                    onClick={() => navigate('/favoritos')}
                />
                <Avatar
                    sx={{
                        height:'30px',
                        width:'30px'
                    }}
                    onClick={() => navigate('/minha-conta')}
                />
            </Box>
        </>
    );
}