import mysql from "mysql2/promise";

(async () => {
  try {
    console.log(process.env);
    const connection = await mysql.createConnection({
      host: process.env.HOST,
      port: 3306,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
    });

    await connection.connect();

    const result = await connection.query("select * from User");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
