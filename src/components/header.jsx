import classes from './Styles/header.module.css'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './UI/theme'
const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <header>
                    <nav className={classes.navbar}>
                        <div>
                            <img src="https://eqonex.com/logo-primary-invert.svg" alt="logo" />
                        </div>
                        <div>
                            <Button onClick={() => { navigate("/login") }} variant="primary">Login</Button>
                            <Button onClick={() => { navigate("/signup") }} variant="secondary">SignUp</Button>
                        </div>
                    </nav>
                </header>
            </ThemeProvider>
        </div>
    )
}
export default Header