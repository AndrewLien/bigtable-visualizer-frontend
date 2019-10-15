import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from "@material-ui/core/Container";
import {Copyright} from './utils/copyright'
import {makeStyles} from "@material-ui/core";

const UseStyles = makeStyles(theme => ({
    footer: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(1, 0),
},
}));

const Footer = () => {
    const classes = UseStyles();
    return(
        <div>
            {/* Footer */}
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Copyright />
                </Container>
            </footer>
            {/* End footer */}
        </div>
    )
}
export default Footer;
