// @ts-nocheck
const mysql = require('mysql2');
const dbConfig = require("../config/db-config.ts");

const connection = mysql.createConnection(dbConfig.db_info);

function test(callback) {
    connection.query("SELECT * FROM page", (err, rows, fields) => {
        if (err)
            throw err;

        callback(rows);
    });
}

module.exports = {
    test
}