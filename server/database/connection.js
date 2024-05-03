import  sqlite3  from "sqlite3";
import { open } from "sqlite";

const connection = await open ({
    filename: "MandatoryTwo.db",
    driver: sqlite3.Database  // driver er bare noget der integere med en database/ filer  ABI =  application binary interface
});

export default connection;