import mysql from "mysql2/promise";

(async () => {
  try {
    console.log(process.env);
    const connection = await mysql.createConnection({
      socketPath: process.env.INSTANCE_UNIX_SOCKET,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.PASS,
      database: process.env.DB_NAME,
    });

    await connection.connect();

    const result = await connection.query("select * from User");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
