import { createTheme } from "@mui/material/styles";

import { cyan } from "@mui/material/colors";


const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'primary', color: 'primary' },
                    style: {
                        textTransform: 'none',
                        border: ' 1px solid #fff',
                        color: 'white',
                        backgroundColor: 'transparent',
                        margin: '10px',
                        padding: '5px 26px',
                        textDecoration: 'none',
                        "&:hover": {
                            backgroundColor: "#fff",
                            color: cyan[800],
                            border: `1px solid ${cyan[800]}`
                        },

                    },

                },
                {
                    props: { variant: "secondary", },
                    style: {
                        textTransform: 'none',
                        color: cyan[800],
                        border: '1px solid #fff',
                        backgroundColor: "white",
                        margin: '10px',
                        padding: '5px 26px',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        "&:hover": {
                            backgroundColor: cyan[800],
                            color: ' #fff',
                            border: '1px solid #fff'
                        }
                    }
                },
                {
                    props: { variant: "third", },
                    style: {
                        textTransform: 'none',
                        color: cyan[800],
                        border: `1px solid ${cyan[800]}`,
                        backgroundColor: "transparent",
                        padding: '5px 26px',
                        width: '45%',
                        borderColor: '#E0E3E9',
                        borderRadius: 0,
                        "&:hover": {
                            borderColor: cyan[800]
                        }
                    }
                },

            ]
        },

    },

});

export default theme