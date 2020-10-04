/**
 * Config file
 */

import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
    throw result.error
}
   
console.log(result.parsed)

export default {
    db: process.env.DB,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    allowedOrigins: ['http://localhost:3000', 'http://localhost:4020']
};
