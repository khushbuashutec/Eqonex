import { Button, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import useStyles from "./Styles/signupStyle"

const SignUpForm = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.sideBar}>
                <div>
                    <p>Register for an individual account</p>
                    <ul>
                        <li>Create an account</li>
                        <li>Verify your identity</li>
                        <ListItem disablePadding>
                            <ListItemIcon>
                                icon here
                            </ListItemIcon>
                            <ListItemText primary="Chelsea Otakan" />

                        </ListItem>
                    </ul>
                    <div></div>
                    <p>Registering on behalf of a company?</p>
                    <Button variant="outlined">INSTITUTIONAL ACCOUNT</Button>
                </div>
            </div>

        </>
    )
}
export default SignUpForm