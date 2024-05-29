
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'eda_tools',
  port:3307
};

const pool = mysql.createPool(dbConfig);

export default pool;
