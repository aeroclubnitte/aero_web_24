const nodemailer=require('nodemailer');
module.exports.sendmail=async (name,email,subject,explain)=>{
    const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:'queriesaeroclubnitte@gmail.com',
            pass:'gejlkbexiikkfhvw'//passcode of above gmail
        },

        tls:{rejectUnauthorized:false
        }


    })
    const mailoptions={
        from:"queriesaeroclubnitte@gmail.com",
        to:`aeroclubnitte@nmamit.in`,
        subject:`${subject}`,
        text:`Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Body: ${explain}`,
        
    }

    transporter.sendMail(mailoptions,(err,res)=>{
        if(err){
            console.log("there was a error",err)
        }else{
            console.log("Here is a response",res);
            console.log("Mail successfully sent");
        }
    })
}

