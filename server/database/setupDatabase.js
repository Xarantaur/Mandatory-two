import db from "./connection.js";

const isDeleteMode = process.argv.find((arg) => arg === 'delete')
console.log(isDeleteMode)

if (isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS accounts`)
}
await db.exec(`CREATE TABLE IF NOT EXISTS accounts (
 id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
 email TEXT NOT NULL UNIQUE,
 password TEXT NOT NULL
)
`);
