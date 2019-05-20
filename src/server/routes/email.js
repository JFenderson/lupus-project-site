import {transporter} from '../util/gmail';
import nodemailer from 'nodemailer';
import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;

    const mailOption = {
        to: 'joseph.fenderson@gmail.com',// who the email is coming from..in the contact form
        from: `${name} <${email}>`,//who the email is going to
        subject: `${name} Thank you for your inquiry`,//subject line
        html: `<div style="text-align: center; margin: auto; margin-right: auto 0; border: 1px solid; padding: 10px; width: 50%; height: auto;">
        <h1>Hey Joseph,</h1> 
        <h1>${name} would like to volunteer please contact at ${phone}</h1>
      </div>`,
    };



    transporter.sendMail(mailOption,(error)=> {
        if (error) {
            console.log(error);
            res.sendStatus(400)
        } else {
            console.log('email sent!')
            res.sendStatus(200);
        }
        transporter.close();
    });
})


export default router;