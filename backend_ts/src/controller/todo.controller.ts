import { Request, Response } from 'express';
import * as TodoService from '../service/todo.service';

export const getTodos:any = async (req: Request, res: Response) => {
  try {
    const { username } = req.query;
    if (!username) {
      return res.status(400).json({ message: 'username is required!' });
    }
    const todos = await TodoService.getTodos(username as string);
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const markTodoAsCompleted:any = async (req: Request, res: Response) => {
  try {
    const { tid } = req.query;
    if (!tid) {
      return res.status(400).json({ message: 'Item not found!' });
    }
    await TodoService.markTodoAsCompleted(tid as string);
    res.status(204).send('Updated');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const addTodo: any = async (req: Request, res: Response) => {
  try {
    const { title, details, username } = req.body;
    await TodoService.addTodo(title, details, username);
    res.status(201).json({ message: 'Item added to the list!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
