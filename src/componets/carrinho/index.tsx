import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Carrinho(){

    const navigate = useNavigate();

    return(
        <Box
            display='flex'
            alignItems='center'
            justifyContent='end'
            sx={{
                height:'10px',
                width:'90%',
                position:'fixed',
                top:'1.5rem',
                marginRight:'1rem'
            }}
        >
            <ShoppingCartIcon
                onClick={() => navigate('/carrinho')}
            />
        </Box>
    );
}