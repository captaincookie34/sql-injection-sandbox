const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root12345',
    database: 'user_db'
}).promise()



async function getUsers() {
    const [rows] = await pool.query("SELECT * from users")
    return rows
}


getUsers().then(result => {
  console.log(result)
}).catch(error => {
  console.error("Error fetching data:", error);
});
