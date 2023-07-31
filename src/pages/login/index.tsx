import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import { useThemeApp } from "../../hooks/use-theme-app";
import { useState } from "react";
import { useApi } from "../../hooks/use-api";

export function Login() {

    const themeApp = useThemeApp(30);
    const theme = useThemeApp(14, '#3a50c582');
    const api = useApi();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function submit() {

        const data = {
            email,
            password
        }

        await api.login(data);
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
                    boxShadow:'0 4px 8px rgba(0, 0, 0, 0.5)'
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
                    Login
                </Typography>
                <Typography
                    sx={{
                        fontSize: theme.configFontDark.fontSize,
                        fontFamily: theme.configFontDark.fontFamily,
                        fontWeight: theme.configFontDark.fontWeight,
                        color: theme.configFontDark.color,
                        position: 'fixed',
                        top: '10rem'
                    }}
                >
                    Efetue seu login utilizando
                </Typography>
                <Typography
                    sx={{
                        fontSize: theme.configFontDark.fontSize,
                        fontFamily: theme.configFontDark.fontFamily,
                        fontWeight: theme.configFontDark.fontWeight,
                        color: theme.configFontDark.color,
                        position: 'fixed',
                        top: '12rem'
                    }}
                >
                    seu e-mail e sunha senha !
                </Typography>

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
                <Typography
                    color="text.secondary"
                    variant="body2"
                >
                    Não tem conta ?
                    <Link
                        href="/usuario/cadastrar"
                        underline="hover"
                        variant="subtitle2"
                    >
                        Cadastre - se
                    </Link>
                </Typography>
                <Button
                    size="large"
                    sx={{ mt: 3, width: '80%' }}
                    style={{ backgroundColor: theme.color.rosa }}
                    variant="contained"
                    onClick={submit}
                    type="submit"
                >
                    Entrar
                </Button>
            </Paper>
        </Box>
    );
}