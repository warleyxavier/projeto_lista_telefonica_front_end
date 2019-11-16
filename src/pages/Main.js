import React, {useState} from 'react';
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header';
import AddPhone from '../components/AddPhone';
import Phones from '../components/Phones';

import './Main.css';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: 15,
        right: 15,
    }
  }));

export default function Main() {

    const [showAddPhone, setAddPhone] = useState(false);
    const [reload, setReload] = useState(false);

    const classes = useStyles();

    function HideAddPhone() {
        setAddPhone(false);
    };

    function confirmSave() {
        setReload(!reload);
    };
    
    return(
        <div>
            <Header />
            <AddPhone show={showAddPhone} hideModal={HideAddPhone} confirmSave={confirmSave} />
            <Phones Reload={reload}/>
            <Fab
                disabled={showAddPhone ? true : false}
                color='primary'
                aria-label='add'
                className={classes.fab}
                onClick={() => setAddPhone(true)}
            >
                <AddIcon/>
            </Fab>
        </div>
    );

} 