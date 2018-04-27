export default var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'gopalsivethna@gmail.com',
        pass: 'Getlost1'
    }
});

module.exports = transporter;
