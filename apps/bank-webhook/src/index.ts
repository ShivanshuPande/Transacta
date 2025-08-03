import express from "express";
import db from "@repo/db/client"
const app = express();

app.use(express.json());

const port = 3000;

app.post("/webhookhdfc" , async (req ,res)=>{
    const paymentInformation :{
        token :string ,
        userId : string,
        amount : string
    }={
        token : req.body.token,
        userId : req.body.user_identifier,
        amount : req.body.amount
    };
    
    
    try{
        await db.$transaction([
            db.balance.updateMany({
                where:{
                    userId : Number(paymentInformation.userId)
                },{
                    data :{
                        amount : {
                            
                        }
                    }
                }
            })
        ])
    }

})

// write the code for transaction

app.listen(port);

