import express from 'express';
import * as TodoController from '../controller/todo.controller';

const router = express.Router();

router.get('/', TodoController.getTodos);
router.patch('/edit', TodoController.markTodoAsCompleted);
router.post('/add', TodoController.addTodo);

export default router;
