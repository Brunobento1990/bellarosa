import { Box } from "@mui/material";
import { useThemeApp } from "../../hooks/use-theme-app";
import { ReactNode } from "react";
import { Menu } from "../menu";
import { Carrinho } from "../carrinho";

interface OutletProps {
    children: ReactNode;
};

export function Layout(props : OutletProps){

    const themeApp = useThemeApp();

    return(
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            sx={{
                backgroundColor:themeApp.color.rosa,
                width:'100%',
                height:'92vh'
            }}
        >
            <Carrinho/>
            {props.children}
            <Menu/>
        </Box>
    );
}