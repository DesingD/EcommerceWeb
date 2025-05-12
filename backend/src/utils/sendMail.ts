import sendGrid from "@sendgrid/mail";

export const sendMail = async (to: string, subject: string, text: string, html:string):Promise<any> => {

    sendGrid.setApiKey(process.env.SENDGRID_API_KEY || "");


    const msg = {
        to: to, // Change to your recipient
        from: process.env.SENDGRID_SENDER || 'default@example.com', // Change to your verified sender
        subject: subject,
        text: text,
        html: html,
      }
      let statusCode = 404;
      
      try {
        const response = await sendGrid.send(msg);
        statusCode = response[0].statusCode;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error sending email:", error.message);
        } else {
          console.error("Error sending email:", error);
        }
        statusCode = 500; // Internal Server Error
      }
      return statusCode;
}