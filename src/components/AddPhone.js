import React, {useState} from 'react';

import APIRequest from '../services/APIRequest';
import './AddPhone.css';

export default function AddPhone({show, hideModal, confirmSave}) {

    const [peopleName, setPeopleName] = useState('');
    const [phone, setPhone] = useState('');

    const style = show ? 'AddPhotocontainer AddPhotocontainerVisible' : 'AddPhotocontainer AddPhotocontainerInvisible';

    async function savePhone() {

        await APIRequest.post('/phone', {
            name: peopleName,
            phone
        });

        hideModal();

        confirmSave();

    };

    return (
        <div className={style}>
            <div className='content contentWidth'>
                <div className='title'>
                    Cadastro de Telefone
                </div>
                <div className='fields'>
                    <input 
                        type='text' 
                        className='field' 
                        placeholder='Informe o nome do titular do telefone' 
                        value={peopleName}
                        onChange={event => setPeopleName(event.target.value)}
                    />
                    <input 
                        type='number' 
                        className='field' 
                        placeholder='Informe o número do telefone' 
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                    />
                </div>
                <div className='buttons'>
                    <button 
                        className='button buttonCancel'
                        onClick={() => hideModal()}
                    >Cancelar</button>
                    <button 
                        className='button buttonSave'
                        onClick={() => savePhone()}
                    >Salvar</button>
                </div>
            </div>
        </div>
    );
}