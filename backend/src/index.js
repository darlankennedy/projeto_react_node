const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const port = 3333;
const app = express();

app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.use(routes);

//o recuso que quero acessar users , rota geralmente vem conjunto geral 
//o recuso geralmente esta associado ha algo no banco 
//conceito metdoso http get
//GET: busca uma informação do backend exemplo: lsitagem de usuario
//POST: Criar uma informação no backend : exemplo rota que vai criar usuario vulgo cadastro 
//PUT : alterar uma informação no backend :alterar o cadastro do usuario 
//Delete : deleata uma informação do backend : excluir algum usuario 
// tipos de parametros 


///Query: parametros nomeados enviados na rota  apos "?" filtros paginação 
//roure parrametros : paramentro ultilizado para identificar 
// Request body


//comunica com banco de dados driver: select* from usrs  
//query build :table('users').select('*').where()
//vamos usar knex 

app.listen(port,() =>{
    console.log(`porta do servidor é ${port}`);
});

