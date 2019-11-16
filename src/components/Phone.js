import React from 'react';
import {Delete} from '@material-ui/icons';

import APIRequest from '../services/APIRequest';
import './Phone.css';
import User from '../resources/assets/user2.png';

export default function Phone({phone, ExecuteReload}) {

    async function deletePhone() {
        await APIRequest.delete(`/phone/${phone.id}`);
        ExecuteReload();
    };

    return (
        <div className='phoneContainer'>
            <div className='user'>
                <img className='userPhoto' src={User} alt='' />
            </div>
            <div className='data'>
                <p>{phone.nome}</p>
                <p>{phone.telefone}</p>
            </div>
            <div className='options'>
                <button 
                    className='excludeButton'
                    onClick={() => deletePhone()}
                ><Delete htmlColor='rebeccapurple'/></button>
            </div>
        </div>
    );

}