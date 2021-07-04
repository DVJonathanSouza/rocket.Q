// Importando nosso banco de dados
const Database = require("./config");

const initDb = {
    async init() {
        // Indicando para o JS com "await" que ele deve esperar a resposta do "Database()"
        // Lembre que para o "await" funcionar a funcao deve ter o "async"
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT 
        )`);

        await db.close()
    }
}

initDb.init();