import SendMail from "./Email";

const handler = async (req, res) => {
    const bodys = req.body
    if(req.method !== 'POST') {return res.status(405).json({success:false, message:' Post method only allowed',bodys})}
    const {firstname, lastname, email, subject, message} = req.body;

    if(!firstname || !lastname || !email || !subject || !message) {return res.status(401).json({success:false, message:'Please fill in all fields', bodys});}
    console.log(firstname, lastname, email, subject, message)
    try{
        SendMail(firstname, lastname, email, subject, message);
    }catch(err) {
        console.log(err.message)
    }


    res.status(200).json({success:true, message:'Email send successfully'});
    
}


export default handler;