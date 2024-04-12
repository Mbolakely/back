// jwtMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, '1234', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    (req as any).userId = (decoded as any).userId;
    next(); 
  });
};

export default jwtMiddleware;
