const crypto = require('crypto');
const connection = require('../database/connections');

module.exports = {
    async index(req,res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },

    async create(req,res){
        const {name,email,whatsap,city,uf}  = req.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
       id,name,email,whatsap,city,uf,        
    });
    
        console.log(id);
        
            return res.json({id});
    },

    

}