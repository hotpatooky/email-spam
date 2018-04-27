const nodemailer = require('nodemailer');
const fs = require('fs');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'email',
        pass: 'pass'
    }
});

const mailOptions = {
  from: 'gopalsivethna@gmail.com', // sender address
  to: 'alex@thewoodroffe.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: 'null'
};

function sendMail(){
  return new Promise((resolve, reject) =>{
    transporter.sendMail(mailOptions, (err, info) =>{
      if (err) return reject(console.log(`ERROR SENDING MAIL : ${err}`));
      resolve(console.log(`SUCCESS!`));
    });
  });
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function messageRead(){
  return new Promise((resolve, reject) =>{
    fs.readFile('message.txt', (err, data) =>{
      if (err) return reject(console.log(`ERROR READING MESSAGE : ${err}`));
      mailOptions.html = data;
      resolve(console.log(`Message set`));
    });
  });
}


async function run(amount){
  var i = 0;
  await messageRead();
  while(i < amount){
    await sendMail();
    i++
    console.log(`Success: ${i}/${amount}`);
    await sleep(2000);
  }
}







run(20);
