/*Important: to run unit testing go first to .env*/

import { config } from 'dotenv';

config();


    
     export const username = process.env.DB_USERNAME || 'root'
     export const password= process.env.DB_PASSWORD || 'password'
     export const database= process.env.DB_NAME || 'local_commerce_fake'
     export const host= process.env.DB_HOST || '127.0.0.1'
     export const dialect= process.env.DB_DIALECT || 'mysql'
    //  export const NODE_ENV= process.env.NODE_ENV
    

