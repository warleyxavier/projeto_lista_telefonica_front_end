import React, {useEffect, useState} from 'react';

import APIRequest from '../services/APIRequest';
import Phone from './Phone';
import './Phones.css';
import Empty from '../resources/assets/empty.svg';

export default function Phones({Reload}) {

    const [phones, setPhones] = useState([]);
    const [search, setSearch] = useState('');

    async function loadPhones() {

        const response = await APIRequest.get(`/phone/${search}`);

        setPhones(response.data.peoples);

    };

    useEffect(() => {
        loadPhones();
        console.log('rodou');
    }, [Reload]);

    function ExecuteReload() {
        loadPhones();
    };

    return (
        <div className='phonesContainer'>
            <div className='search'>
                <input 
                    type='text' 
                    className='inputSearch' 
                    placeholder= 'Pesquise pelo nome da pessoa'
                    autoFocus={true}
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
                <button 
                    className='buttonSearch'
                    onClick={() => loadPhones()}
                    >PESQUISAR</button>
            </div>
            <div className='phones'>
            {
                phones.length > 0 ? (
                    phones.map(phone => <Phone key={phone.id} phone={phone} ExecuteReload={ExecuteReload} />)
                ) : (
                    <div className='empty'>
                        <img className='imageEmpty' src={Empty} alt='nenhum registro encontrado' />
                        <p className='textEmpty'>Nenhum registro encontrado</p>
                    </div>
                )
            }
            </div>
        </div>
    );
}