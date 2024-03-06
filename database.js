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

async function authenticateUser(username, password) {
  const connection = await pool.getConnection();
      try {
        const [rows] = await connection.execute(
            `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
        );
        
        // Using parameterized query to fix the SQL Injection
        // const [rows] = await pool.query(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password])
        return rows.length > 0;
    } finally {
        connection.release();
    }
}

module.exports = {
  getUsers,
  authenticateUser
};

// getUsers().then(result => {
//   console.log(result)
// }).catch(error => {
//   console.error("Error fetching data:", error);
// });
