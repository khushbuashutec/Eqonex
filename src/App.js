
import './App.css';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/loginForm';
import SignUpForm from './components/signupForm';
import { ThemeProvider } from '@emotion/react';
import Header from './components/header';
import ForgotPassword from './components/forgotPasswordForm';
import classes from './components/Styles/header.module.css'
import theme from './components/UI/theme';



function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <Header />
          <main>

            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/login/forgotPassword" element={<ForgotPassword />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes >

          </main>

        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
