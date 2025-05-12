import  Jwt  from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const validateToken = (req:Request, res:Response, next:NextFunction):void => {
    const token = req.headers.token as string
    
    if (!token) {
        res.status(401).json({
            message: "Token not provided",
        });
        return;
    }

    try {
        const secretKey = process.env.JWT_SECRET || "your_secret_key";
        const decoded = Jwt.verify(token, secretKey);
        
        (req as any).decoded = decoded;

        next();

    } catch (error) {
        res.status(401).json({
            message: "Invalid token",
        });
    }
}