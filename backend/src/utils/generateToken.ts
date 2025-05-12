import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, data: object, exp:number):string => {
    if (!process.env.JWT_SECRET || typeof process.env.JWT_SECRET !== 'string') {
        throw new Error("JWT_SECRET environment variable is not defined or is not a string");
    }
    const secretKey: string = process.env.JWT_SECRET;
    const token = jwt.sign({_id: userId, data}, secretKey, { expiresIn: exp})

    return token
}