import { Button, FormLabel, TextField } from "@mui/material"
import useStyles from "./Styles/loginStyle"
import UseInput from "./hooks/user_input";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button";

const ForgotPassword = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        isValid: enteredEmailIsValid,
        reset: resetEmail
    } = UseInput(value => value.trim() !== '' && value.includes('@' && '.'));

    const formSubmitHandler = () => {
        if (!enteredEmailIsValid) {
            return;
        }
        resetEmail();
    }

    return (
        <div>
            <form className={classes.form}>
                <p className={classes.heading}>Reset Password</p>
                <p className={classes.descriptionText}>Enter the email address associated with your account to receive further details to reset password.</p>
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

                <div className={classes.buttons}>

                    <Button width="52%"
                        variant="third"
                        onClick={() => { navigate('/login') }}>BACK TO LOGIN</Button>

                    <MyButton width="52%"
                        label="Confirm"
                        onClick={formSubmitHandler} />
                </div>
            </form >
        </div >

    )
}
export default ForgotPassword