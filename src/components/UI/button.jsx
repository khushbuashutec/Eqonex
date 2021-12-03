import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
    myButton: {
        backgroundColor: '#05acbb',
        color: "#fff",
        borderRadius: 0,
        "&:hover": {
            backgroundColor: "#048391",
        }
    },
}))
const MyButton = (props) => {
    const classes = useStyles()
    return (
        <Button className={classes.myButton}
            sx={{ width: `${props.width}` }}
            onClick={props.onClick}>{props.label}</Button>
    )
}
export default MyButton

