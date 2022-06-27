import { app } from "./app";
import { changeModuloTurma } from "./endpoints/changeModuloTurma";
import { changeTurmaDocente } from "./endpoints/changeTurmaDocente";
import { changeTurmaEstudante } from "./endpoints/changeTurmaEstudante";
import { createDocente } from "./endpoints/createDocente";
import { createEstudante } from "./endpoints/createEstudante";
import { createTurma } from './endpoints/createTurma'
import { getAllDocente } from "./endpoints/getAllDocente";
import { getEstudanteByNome } from "./endpoints/getEstudanteByNome";
import { getTurmasAtivas } from "./endpoints/getTurmasAtivas";

app.post('/turma', createTurma)
app.get('/turma/ativas', getTurmasAtivas)
app.put('/turma/:id', changeModuloTurma)

app.post('/estudante', createEstudante)
app.get('/estudante', getEstudanteByNome)
app.put('/estudante/:id', changeTurmaEstudante)

app.post('/docente', createDocente)
app.get('/docente', getAllDocente)
app.put('/docente/:id', changeTurmaDocente)