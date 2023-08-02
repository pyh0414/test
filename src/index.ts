import mysql from "mysql2/promise";

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: "34.64.195.140",
      port: 3306,
      user: "yhpark",
      password: "RqT6JRb%c3E9*3Ub",
      database: "ezstorage",
    });

    await connection.connect();

    const result = await connection.query("select * from User");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
