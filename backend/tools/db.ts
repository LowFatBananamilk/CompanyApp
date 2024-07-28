// @ts-nocheck
import mysql from 'mysql2'
import config from '../config/db-config'

export const connection = mysql.createConnection(config);

connection.connect(error => {
    if (error)
        throw error;
    console.log("Successfully connected to the database. ");
})
