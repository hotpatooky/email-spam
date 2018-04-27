const mailOptions = ('../config/emailConfig');

function setMessage(){
  return new Promise((resolve, reject) =>{
    fs.readFile('message.txt', (err, data) =>{
      if (err) return reject(console.log(`ERROR READING MESSAGE : ${err}`));
      mailOptions.html = data;
      resolve(console.log(`Message set`));
    });
  });
}

module.exports = setMessage;
