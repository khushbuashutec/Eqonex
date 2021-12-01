
import './App.css';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/loginForm';
import SignUpForm from './components/signupForm';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom';
import classes from './components/header.module.css'
import theme from './components/UI/theme.jsx'


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <header>
          <nav className={classes.navbar}>
            <div>
              <h2>Eqonex</h2>
            </div>
            <div>
              <NavLink activeClassName={classes.active} to="/login"><Button variant="primary">Login</Button></NavLink>
              <NavLink activeClassName={classes.active} to="/signup"><Button variant="secondary">SignUp</Button></NavLink>
            </div>
          </nav>
        </header>
        <main>
          <div className="App">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes >
          </div >
        </main>
      </ThemeProvider>

    </>
  );
}

export default App;
