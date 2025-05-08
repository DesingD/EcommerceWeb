import { Request, Response, NextFunction} from "express"
import {isValidEmail} from '../utils/emailValidate';

export const validateEmailMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const {email} = req.body;

    if(!email || !isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    
    next()
}