import React,{useState} from 'react';
import './style.css';
import {Link,useHistory} from 'react-router-dom'
// import herosimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api'


export default () => {

    const [title,setTitle] = useState('');
    const [description,setdescription] = useState('');
    const [value,setValue] = useState('');
    const ongid = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
         const res =   await api.post('incidents',data,{
                headers:{
                    Authorization: ongid 
                }
            }).then(response=>{
                console.log(response)
            }).catch((err)=>{
                console.log(err)
            });

            console.log(res);
            history.push('/profile');
        } catch (error) {
            alert('erro ao cadastrar');
        }
    }

    
    return(
    <div className="new-incident">
    <div className="content">
        <section>
            <img src={logoimg} alt="Be The Hero" />
            <h1>Cadastrar novo Caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
            
            <Link className="back-link" to="/profile">
                <FiArrowLeft  />
                Volta para home
            </Link>
        </section>
        
        <form action="" onSubmit={handleNewIncident}>

            <input type="text"
              placeholder="titulo do caso"
              value={title}
              onChange={e=>setTitle(e.target.value)}
              />
            <textarea type="email" 
            placeholder="Descrição"
            value={description}
              onChange={e=>setdescription(e.target.value)}
            />
            <input type="text"
              placeholder="Valor em reais"
              value={value}
              onChange={e=>setValue(e.target.value)}
              />
            <button className="button" type="submit">
                Cadastrar
            </button>

        </form>
    </div>
</div>

)
}