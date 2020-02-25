import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './CustomAppBar.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        left: 0,
    },
}));

function CustomAppBar() {
    const colorButton = "primary";
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={'toolbar-container'}>
                    <Typography variant="h6" className={'title'}>
                        WebAppName
                    </Typography>
                    <div>
                        <Button color={colorButton}>Start</Button>
                        <Button color={colorButton}>About us?</Button>
                        <Button color={colorButton}>Services</Button>
                        <Button color={colorButton}>Catalogue</Button>
                        <Button color={colorButton}>Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default CustomAppBar;
