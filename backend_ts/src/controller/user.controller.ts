import { Request, Response } from 'express';
import * as UserService from '../service/user.service';

export const registerUser: any = async (req: Request, res: Response) => {
  try {
    console.log('in useerocntroller') 
    const { name, username, password } = req.body;

    const result = await UserService.registerUser(name, username, password);

    if (result.existing) {
      return res.status(200).json({ message: 'Username used', user: result.user });
    }

    return res.status(201).json({
      message: 'User created successfully!',
      user: result.user,
    });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

export const loginUser: any = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const result = await UserService.loginUser(username, password);

    if (!result.found) {
      return res.status(201).json({ message: 'User not found!' });
    }

    if (!result.validPassword) {
      return res.status(202).json({ message: 'Invalid password!' });
    }

    return res.status(200).json({ message: 'Login Successful', username: result.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error!', error: 'Server error' });
  }
};
