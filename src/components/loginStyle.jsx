import { makeStyles } from '@mui/styles';




const useStyles = makeStyles(theme => ({
    btnLogin: {
        backgroundColor: '#05acbb',
        color: "#fff",
        "&:hover": {
            backgroundColor: "#048391",
        }
    },
    form: {
        margin: '0 auto',
        maxWidth: '610px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginTop: '4rem',
    },
    heading: {
        fontSize: '32px',
        fontFamily: ' Montserrat, sans- serif',
        fontWeight: '400px',
        color: "#546e7a"
    },

    input: {
        backgroundColor: 'white',
        borderRadius: "none",
        marginTop: '5px',
        borderRadios: 'none',
        '& div.makeStyles-input-4': {
            borderRadius: 'none !important'
        },

        '& div.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: 'none !important'
        }
    },

    alert: {
        color: "red"
    },
    label: {
        marginBottom: '10px',
    },
    divider: {
        maxWidth: '100%',
        backgroundColor: '#b0bec5',
        height: '1px'
    },
    fPassword: {
        '& .css-1iwtne7-MuiTypography-root-MuiLink-root ': {
            color: '#424242',
            textDecoration: 'none',
            fontWeight: '300'
        },
        '& .css-1iwtne7-MuiTypography-root-MuiLink-root:hover ': {
            color: '#048391'
        },
    },
    signUpLink: {
        marginTop: '5px',
        color: '#424242',
        fontWeight: '300',
        '&  .css-1iwtne7-MuiTypography-root-MuiLink-root ': {
            color: '#048391',
            textDecoration: 'none',
            cursor: 'pointer'
        }
    },
    error: {
        color: 'red'
    }
}));
export default useStyles