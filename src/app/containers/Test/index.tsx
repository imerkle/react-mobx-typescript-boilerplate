import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import {Button} from '@material-ui/core';
import * as style from "./style.css";
import cx from "classnames";

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}));

const Hook = () => {
    const classes = useStyles();
    return <Button className={cx(classes.root, style.button)}>Hook</Button>;
}
export default Hook;
