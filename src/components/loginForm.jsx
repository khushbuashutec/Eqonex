
import { TextField, Button, FormLabel, Link } from '@mui/material'
import useStyles from './loginStyle';
import { useNavigate } from 'react-router-dom';
import UseInput from './hooks/user_input';




const LoginForm = () => {

    const navigate = useNavigate()
    const classes = useStyles();
    const passwordExp = new RegExp(`^(?=.*[a-z])(?=.*[A-Z]).{8,32}$`);
    // return re.test(value);
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

    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!enteredEmailIsValid) {
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
                    <TextField className={classes.input}
                        fullWidth
                        placeholder="Please Enter A Valid Email Address"
                        id="fullWidth"
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail} />

                </div>
                {emailInputHasError && < p className={classes.error}> Email Required!</p>}
                <div>
                    <FormLabel className={classes.label}>Password
                        <span className={classes.alert}>*</span> </FormLabel>
                    <TextField className={classes.input}
                        fullWidth
                        placeholder="Please Enter A Valid Password Address"
                        id="fullWidth"
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword} />
                </div>
                {passwordInputHasError && < p className={classes.error} > Password Must Required!</p>}
                <div>
                    <Button className={classes.btnLogin}
                        fullWidth
                        onClick={formSubmitHandler}
                        disabled={!formIsValid}>Login</Button>
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
            </form >
        </div >
    )
}


export default LoginForm