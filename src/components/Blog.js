import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Footer from 'Footer'






const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
];

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];


const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

export default function Blog() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Button size="small">Subscribe</Button>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Blog
                    </Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <Button variant="outlined" size="small">
                        Sign up
                    </Button>
                </Toolbar>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section}
                            variant="body2"
                            href="#"
                            className={classes.toolbarLink}
                        >
                            {section}
                        </Link>
                    ))}
                </Toolbar>

            </Container>
            {/* Footer */}
            {/* End footer */}
        </React.Fragment>
    );
}
