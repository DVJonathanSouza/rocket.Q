// Importando nosso banco de dados
const Database = require("../db/config")

// "Permetindo" exportar este arquivo
module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let roomId

        let isRoom = true
        while (isRoom) {
            // Gerar aleatoriamente os "roomId" da sala
            for (var i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString()
            }

            // Pegando todos "all" os id da table rooms
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)

            // Verificando se os "id" existentes ja existe
            isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId)

            // Se for "false", e nao existir nenhum "id" igual ao criado
            if (!isRoom) {
                // Ai, insere a table rooms no banco com suas colunas "id" e "pass"
                await db.run(`INSERT INTO rooms (
                        id,
                        pass
                    ) VALUES (
                        ${parseInt(roomId)},
                        ${pass}
                    )`)
            }
        }

        // Fecha a gaveta do banco de dados
        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res) {
        const db = await Database()

        const roomId = req.params.room

        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)

        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)

        let isNoQuestions

        if (questions.length == 0) {
            if (questionsRead.length == 0) {
                isNoQuestions = true
            }
        }

        res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions })
    },

    enter(req, res) {
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
};