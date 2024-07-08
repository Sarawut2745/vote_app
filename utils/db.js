// utils/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'vote_db',
});

const mysqlPool = {
  query: async (sql, values) => {
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
};

async function executeQuery(query, values) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(query, values);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = { mysqlPool, executeQuery };
