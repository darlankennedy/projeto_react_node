import React, {useState} from 'react';
import './style.css';
import {Link, useHistory} from 'react-router-dom'
import herosimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';




export default () =>{

    const [id,setId] = useState('');
    const history = useHistory();
   async function handleLogin(e){
        e.preventDefault();

        try{
     
            const resposta  = await api.post('sessions',{id});


            localStorage.setItem('ongId',id);
            localStorage.setItem('name',resposta.data.name);

            history.push('/profile');

        }catch (err) {

            alert('falha no login');

        }
    }

    return( 

    <div className="logon-container">
        <section className="form">
            <img src={logoimg} alt="Be The Hero" />
            <form onSubmit={handleLogin}>
                <h1>Faça Seu logon </h1>

                <input 
                type="text" 
                placeholder="sua ID"
                value={id}
                onChange={e => setId(e.target.value)}
                />
                <button type='submit' className="button">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"></FiLogIn>
                    Não tenho Cadastro
                </Link>
            </form>
        </section>
        
        <img src={herosimg} alt="Heroes" />

    </div>
  
);

}