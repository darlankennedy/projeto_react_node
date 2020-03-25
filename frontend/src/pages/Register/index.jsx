import React,{useState} from 'react';
import logoimg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom'
import './style.css'

import api from '../../services/api'


export default () =>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsap,setWhatsap] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');
    const history = useHistory();


    async function handleRegister(e){
         e.preventDefault();

         const data =  {name,email,whatsap,city,uf};

         try{
            const resposta = await api.post('ongs',data);
            
            alert(`Seu ID de acesso ${resposta.data.id}`);
            history.push('/');
         }catch(err){
            alert('erro no cadastro ');
         }
         


    }


    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça Seu Cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft  />
                        Não Tenho Cadastro
                    </Link>
                </section>
                
                <form action="" onSubmit={handleRegister}>

                    <input 
                    type="text" 
                    placeholder="Nome Da Ong"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    />
                    <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                    type="text" 
                    placeholder="WhatsApp"
                    value={whatsap}
                    onChange={e => setWhatsap(e.target.value)} 
                    />

                    <div className="input-group">

                        <input 
                        type="text" 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)} 
                        />
                        <input 
                        type="text" 
                        placeholder="UF" 
                        style={{width: 80 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)} 
                    />

                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}