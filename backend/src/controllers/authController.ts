import { Request, Response } from 'express';
import { generateToken } from '../utils/generateToken';
import { getUserByEmail, getUserById, aggUsers, editUser } from '../services/userService';
import bcrypt from 'bcrypt';
import { isValidEmail } from '../utils/emailValidate';
import {v4 as uuidv4} from "uuid";
import { sendMail } from '../utils/sendMail'; // Assuming you have a utility function to send emails
import {forgotPasswordHtml} from '../utils/templatesMails/forgotMail';
import {generateSixDigitCode} from '../utils/generateCode';

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const isEmailValid = isValidEmail(email);
    if (!isEmailValid) {
        return res.status(400).json({
            message: 'Invalid email format',
        });
    }

    const user = await getUserByEmail(email);
    if (!user) {
        return res.status(404).json({
            message: 'User not found',
        });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
        return res.status(401).json({
            message: 'Invalid password',
        });
    }
    
    const data = {
        rol: 1,
        
    }
    const exp = 60 * 60 * 24 * 30; // 30 day
    const token =  generateToken(user.id, data, exp); // Implement your token generation logic here
    
    res.status(200).json({
        message: 'Login successful',
        token: token,
    });

    
}

export const registerController = async (req: Request, res: Response) => {
  const {email} = req.body;
  // verify email valid
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  //  Verify email unique
  
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return res.status(409).json({ message: "Email already exists" });
  }

  

  let newId = uuidv4();
  req.body.id = newId;


  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password_hash, salt);

  req.body.password_hash = hashedPassword;

  const data = req.body;

  try {
    const customer = await aggUsers(data); 
    res.status(201).json({ message: "Aggregation successful", customer });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
}

export const forgotPasswordController = async (req: Request, res: Response) => {
    const { email } = req.body;

    // Check if the email is valid
    if (!isValidEmail(email)) {
        return res.status(400).json({
            message: 'Invalid email format',
        });
    }

    // Check if the user exists
    const user = await getUserByEmail(email);
    if (!user) {
        return res.status(404).json({
            message: 'User not found',
        });
    }

    const exp = 60 * 15; // 15 min

    const code = generateSixDigitCode();

    // Generate a unique token for password reset
    const resetToken = generateToken(user.id, { action: 'reset_password', code: code }, exp); // Implement your token generation logic here
    const resetPasswordUrl = process.env.RESET_PASSWORD_URL || 'http://example.com/reset-password';
    const html = forgotPasswordHtml(user.name, `${resetPasswordUrl}?token=${resetToken}`);

    const resSend = await sendMail(email, 'Password Reset', `Hola, ${user.name}. Usa este enlace para restablecer tu contraseña: ${resetToken}`, html);
    if (resSend !== 202) {
        return res.status(500).json({
            message: 'Error sending email',
        });
    }
    
    res.status(200).json({
        message: 'Password reset link sent to your email',
    });
}

export const resetPassController = async (req: Request, res: Response) => {
    const data = req.body;
    const { newPassword } = data;
    const decoded = (req as any).decoded 

    if(!newPassword){
        return res.status(400).json({
            message: 'New password is required',
        });
    }

    // Check if the user exists
    const user = await getUserById(decoded._id);
    if (!user) {
        return res.status(404).json({
            message: 'User not found',
        });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password in the database
    const updatedUser = await editUser(user.id, { password_hash: hashedPassword });
    if (!updatedUser) {
        return res.status(500).json({
            message: 'Error updating password',
        });
    }

    
    res.status(200).json({
        message: 'Password reset successful',
        data: updatedUser
    });

}
