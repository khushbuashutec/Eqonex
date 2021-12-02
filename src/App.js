
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginForm from './components/loginForm';
import SignUpForm from './components/signupForm';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material'
import ForgotPassword from './components/forgotPasswordForm';
import classes from './components/header.module.css'
import theme from './components/UI/theme.jsx'


function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container}>
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
          <main >

            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/login/forgotPassword" element={<ForgotPassword />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes >

          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
