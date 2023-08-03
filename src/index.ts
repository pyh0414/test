import mysql from "mysql2/promise";

export const entryPoint = async (req, res) => {
  console.log(new Date());
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

  return res.send("entryPoint!");
};
