export const forgotPasswordHtml = (userName: string, resetLink: string) => `
  <div style="font-family: Arial, sans-serif;">
    <h2>Hola, ${userName}</h2>
    <p>Recibimos una solicitud para restablecer tu contraseña.</p>
    <p>
      Haz clic en el siguiente enlace para crear una nueva contraseña:<br>
      <a href="${resetLink}" style="color: #1a73e8;">Restablecer contraseña</a>
    </p>
    <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
    <hr>
    <small>Este es un mensaje automático, por favor no respondas.</small>
  </div>
`;

