const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
service: 'gmail',
 auth: { 
 user: process.env.usermail, // Cambialo por tu email
 pass: process.env.passwordmail // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `"A la carta Tlaquepaque" <ciundiano@gmail.com>`,
 to: formulario.correo, 
 subject: "Información de tu orden",
 html: `
 <b><strong>Bienvenido A la carta Tlaquepaque</strong></b><br>
 Su número de mesa es la número  ${formulario.id}<br>
 El código de su orden es: ${formulario.codigo}<br>
 Disfrute su estancia :)
 `
 };

transporter.sendMail(mailOptions, function (err, info) { 
    
 if (err)
 console.log(err.message)
 else{
      console.log(info);
 }

 });
}