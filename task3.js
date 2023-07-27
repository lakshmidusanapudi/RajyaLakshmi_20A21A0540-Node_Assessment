var nodemailer=require('nodemailer');
var transport=nodemailer.createTransport({
service:'gmail',auth:{
user:'drajyalakshmi03@gmail.com',
pass:'wrpernfjawprrajc'
}

});
var mailOptions={
    from:'drajyalakshmi03@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'Sending mail of task3 from Node-Js',
    text:'I am 20A21A0540'

};
transport.sendMail(mailOptions,function(error,info)
{
    if(error){
        console.log(error);
    }
    else{
    console.log('Email sent:'+info.response);
    }
});