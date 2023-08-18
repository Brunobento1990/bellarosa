import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useApi } from "../../../hooks/use-api";
import { useThemeApp } from "../../../hooks/use-theme-app";
import { useState } from "react";

export function UsuraioCreate() {
    const themeApp = useThemeApp(30);
    const theme = useThemeApp(14, '#3a50c582');
    const api = useApi();
    const [email, setEmail] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');

    async function submit() {
        var data = {
            nome,
            email,
            password,
            rePassword
        }

        await api.createUser(data);
    }

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            sx={{
                backgroundColor: themeApp.color.rosa,
                width: '100%',
                height: '100vh'
            }}
        >
            <Paper
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '80%',
                    width: '80%',
                    padding: '2px',
                    gap: 4,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
                }}
            >
                <Typography
                    sx={{
                        fontSize: themeApp.configFontDark.fontSize,
                        fontFamily: themeApp.configFontDark.fontFamily,
                        fontWeight: themeApp.configFontDark.fontWeight,
                        color: themeApp.configFontDark.color,
                        position: 'fixed',
                        top: '6rem'
                    }}
                >
                    Bella Rosa
                </Typography>
                <TextField
                    value={nome}
                    label='Nome'
                    onChange={(value) => setNome(value.target.value)}
                    type="text"
                    inputProps={{
                        maxLength: 255,
                    }}
                />
                <TextField
                    value={email}
                    label='E-mail'
                    onChange={(value) => setEmail(value.target.value)}
                    type="email"
                    inputProps={{
                        maxLength: 255,
                    }}
                />

                <TextField
                    value={password}
                    onChange={(value) => setPassword(value.target.value)}
                    label='Senha'
                    type="password"
                    inputProps={{
                        maxLength: 20,
                    }}
                />
                <TextField
                    value={rePassword}
                    onChange={(value) => setRePassword(value.target.value)}
                    label='Confime a Senha'
                    type="password"
                    inputProps={{
                        maxLength: 20,
                    }}
                />
                <Button
                    size="large"
                    sx={{ mt: 3, width: '80%' }}
                    style={{ backgroundColor: theme.color.rosa }}
                    variant="contained"
                    onClick={submit}
                    type="submit"
                >
                    Cadastrar
                </Button>

            </Paper>

        </Box>

    )
}