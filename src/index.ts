import mysql from "mysql2/promise";

export const hello = async (req, res) => {
  console.log(process.env);

  try {
    console.log(process.env);

    const connection = await mysql.createConnection({
      socketPath: process.env.INSTANCE_UNIX_SOCKET,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    await connection.connect();

    const result = await connection.query("select * from User");
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  return res.send("Hello!");
};
