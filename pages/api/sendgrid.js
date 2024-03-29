import sendgrid from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "kflores@kevinflores.net", // Your email where you'll receive emails
      from: "kflores@kevinflores.net", // your website email address here
      subject: `${req.body.subject}`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
