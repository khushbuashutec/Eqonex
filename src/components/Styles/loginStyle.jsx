import { makeStyles } from '@mui/styles';





const useStyles = makeStyles(theme => ({
    form: {
        margin: '0 auto',
        maxWidth: '610px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginTop: '5rem',
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            height: '2.5rem',
            '& .Mui-focused': {
                backgroundColor: 'yellow'
            },
            '& fieldset.MuiOutlinedInput-notchedOutline': {
                border: '1px solid #e5e7eb'
            },
            '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                    // border: '1px solid #e5e7eb',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                    '&:hover': {
                        border: '1px solid #e5e7eb'
                    }
                },
            }
        },
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ': {
            font: 'revert'
        },
        '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input ': {
            font: 'revert'
        }
    },
    heading: {
        fontSize: '32px',
        fontFamily: ' Montserrat, sans- serif',
        fontWeight: '400px',
        color: "#2c3136",
        margin: '5px 0'
    },

    emailField: {
        backgroundColor: 'white',
        borderRadius: 0,
        marginTop: '5px',
    },

    alert: {
        color: "red"
    },
    label: {
        marginBottom: '0',
        color: '#464444',
        fontFamily: ' Montserrat, sans- serif',
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
        color: 'red',
        fontSize: '.75rem',
        lineHeight: '1rem',
    },
    descriptionText: {
        margin: 0,
        color: '#212121',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));
export default useStyles