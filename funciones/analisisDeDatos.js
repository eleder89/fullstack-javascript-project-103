import fs from "fs";

const dataAnalist = (file) => {
  const contenido = fs.readFile(file, "utf-8");
  return contenido;
}

export default dataAnalist;
