import emailjs from "emailjs-com";

export default class EmailService
{
  static sendEmail(e) 
  {
    return emailjs.sendForm(
        "service_n42lnuh",
        "template_6wklw3l",
        e.target,
        "user_O6kGlIXFERq1WWREpfmt1"
      ).then(response => {
        console.log(response)
        if(response.status === 200)
        {
          return true;
        }
        else{
          return false;
        }
      })
  }
}
