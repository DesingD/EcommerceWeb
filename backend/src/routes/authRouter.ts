import { Router } from 'express'
import { ExpressAuth } from '@auth/express'
import GitHub from "@auth/express/providers/github"
import { loginController, registerController, forgotPasswordController, resetPassController } from '../controllers/authController'
import { validateToken } from '../middlewares/validateToken'

const router = Router()

router.get('/', (req, res) => {
    res.send('Auth route')
})
router.post('/login', (req, res) => {
    loginController(req, res)
})

router.post('/register', (req, res) => {
    registerController(req, res)
})

router.post('/forgot', (req, res) => {
    forgotPasswordController(req, res)
})

router.get('/resetpassword', validateToken , (req, res) => {
  // Aquí solo entra si el token es válido
  const decoded = (req as any).decoded 
  res.json({ message: 'Acceso permitido', data: decoded});
});

router.put('/resetpassword', validateToken , (req, res) => {
    resetPassController(req, res)
})

export default router