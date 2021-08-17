import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../../assets/logoBlog.png'
import { Button, Grid } from '@material-ui/core';
import { deepPurple, purple } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        width: '40px',
        height: '40px'
    },
    login: {
        background:  purple[500],
        color: '#FFF'
    },
    register: {
        color: '#FFF',
        borderColor:'#FFF'
    }

}));



function Header() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton component={Link} to="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={logo} alt="logo" className={classes.logo} />
                    </IconButton>
                    <Grid container className={classes.grid} justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Button component={Link} to="/register" variant="outlined" className={classes.register}>
                                Register
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/login" variant="contained" className={classes.login}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
