import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, data: object, exp:number):string => {
    const secretKey:any = process.env.JWT_SECRET
    const token = jwt.sign({_id: userId, data}, secretKey, { expiresIn: exp})

    return token
}