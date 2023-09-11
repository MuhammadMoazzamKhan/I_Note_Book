import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import authContext from '../Context/authenticate/authContext';
import { useContext, useState } from 'react';


export default function SignIn({ alert }) {
    const [user, setUser] = useState({ name: '', email: "", password: "" })
    const context = useContext(authContext)
    const Navigate = useNavigate()
    const { createUser, success } = context;
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = (event) => {
        try {
            const { name, email, password } = user;
            event.preventDefault()
        createUser( name, email, password )
        if (success) {
            alert("Logged In Successfully", "success")
            Navigate("/login")
        } else {
            alert("Credentials", "danger")
        }
    } catch (error) {
            console.log(error)
    }
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        color='secondary'
                        onChange={onChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        color='secondary'
                        onChange={onChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        color='secondary'
                        onChange={onChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='secondary'
                        sx={{ mt: 3, mb: 2 }}
                        disabled={!user.password || !user.email || !user.name}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/login" variant="body2">
                                {"You have already an account? Log In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}