const mailOptions = ('../config/emailConfig');
const transporter = ('../config/transporterConfig');

function sendMail(){
  return new Promise((resolve, reject) =>{
    transporter.sendMail(mailOptions, (err, info) =>{
      if (err) return reject(console.log(`ERROR SENDING MAIL : ${err}`));
      resolve(console.log(`SUCCESS!`));
    });
  });
}

module.exports = sendMail;
