/* eslint-disable @typescript-eslint/no-require-imports */

const mysql = require('mysql')
const db = {
  connectionLimit: 10,
  host: '127.0.0.1',
  post: '3306',
  user: 'root',
  password: 'abcd1234',
  database: 'react-app'
}
const conn = mysql.createConnection(db)
conn.connect()
module.exports = conn
