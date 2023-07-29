import { Box } from "@mui/material";
import { Input } from "../../componets/input";

export function Login(){
    return(
        <Box>
            <Input
                value='teste'
                label='E-mail'
            />
        </Box>
    );
}