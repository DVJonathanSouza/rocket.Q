// Importando tudo de "sqlite3"
const sqlite3 = require("sqlite3");
// Importando somente "open" do sqlite
const { open } = require("sqlite");

module.exports = () =>
    open({
        // Caminho de nosso banco de dados
        filename: './src/db/rocketq.sqlite',
        // Chamando o "drive" que vai comandar o arquivo acima
        driver: sqlite3.Database,
    });