// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '123456',
      database : 'my_db'
    },
    migrations: {
      directory:'./src/database/migrations/'
    },  
    useNullAsDefault:true
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'postgres',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./src/database/migrations/'
    },  
    
  },

  production: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '123456',
      database : 'my_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./src/database/migrations/'
    },  
   
  }

};
