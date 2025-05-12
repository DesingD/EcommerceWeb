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
      
      await sendGrid
        .send(msg)
        .then((response) => {
          statusCode = response[0].statusCode;
        })
        .catch((error) =>{
          return error
        })

      return statusCode;
}