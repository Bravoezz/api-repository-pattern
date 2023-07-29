import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../utils';

export function httpErrorHandler(error: Error | HttpError, req: Request, res: Response, next: NextFunction) {
    const statusCode = 'statusCode' in error ? (error as HttpError).statusCode : 500;
    res.status(statusCode).send({ message: error.message });
}
