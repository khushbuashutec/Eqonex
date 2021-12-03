
import { TextField, FormLabel, Link, IconButton, InputAdornment, OutlinedInput, } from '@mui/material'
import useStyles from './Styles/loginStyle';
import { useNavigate } from 'react-router-dom';
import UseInput from './hooks/user_input';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { useState } from 'react';
import MyButton from './UI/button';


const LoginForm = () => {

    const navigate = useNavigate()
    const classes = useStyles();
    const passwordExp = new RegExp(`^(?=.*[a-z])(?=.*[A-Z]).{8,32}$`);
    const [showPassword, setShowPassword] = useState(false)

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        isValid: enteredEmailIsValid,
        reset: resetEmail
    } = UseInput(value => value.trim() !== '' && value.includes('@' && '.'));

    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        isValid: enteredPasswordIsValid,
        reset: resetPassword
    } = UseInput(value => passwordExp.test(value));

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);

    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!enteredEmailIsValid && !enteredPasswordIsValid) {
            return
        }
        console.log(enteredEmail);
        resetEmail();
        console.log(enteredPassword);
        resetPassword();
    }
    // const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    // const emailInputClasses = EmailInputHasError ? 'form-control invalid' : 'form-control'
    return (
        <div>
            <form className={classes.form}>
                <p className={classes.heading}>
                    Login to EQONEX
                </p>
                <div>
                    <FormLabel className={classes.label}>Email
                        <span className={classes.alert}>*</span> </FormLabel>
                    <TextField className={classes.emailField}
                        fullWidth
                        placeholder="Please Enter A Valid Email Address"
                        id="email"
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail} />
                    {emailInputHasError && < p className={classes.error}> Email Required!</p>}
                </div>

                <div>
                    <FormLabel className={classes.label}>Password
                        <span className={classes.alert}>*</span> </FormLabel>
                    <OutlinedInput className={classes.emailField}
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Please Enter A Valid Password Address"
                        id="password"
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {!showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                                </IconButton>
                            </InputAdornment>}>
                    </OutlinedInput>
                    {passwordInputHasError && < p className={classes.error} > Password Must Required!</p>}
                </div>

                <div>
                    <MyButton width="100%"
                        label="Login"
                        onClick={formSubmitHandler}
                    />
                </div>
                <div>
                    <div className={classes.divider} />
                </div>
                <div className={classes.fPassword}>

                    <Link onClick={() => { navigate('/login/forgotPassword') }}> FORGOT PASSWORD?</Link>
                </div>
                <div>
                    <p className={classes.signUpLink}>Don't have an account?
                        <Link onClick={() => { navigate('/signup') }} > SIGN UP</Link></p>
                </div>
            </form>
        </div>
    )
}
export default LoginForm