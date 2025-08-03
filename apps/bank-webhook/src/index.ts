import express from "express";
import db from "@repo/db/client"
const app = express();

app.use(express.json());

const port = 3003;

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
                },
                    data :{
                        amount : {
                            increment : Number(paymentInformation.amount)
                        }
                    }
                
            }),

            db.onRampTransaction.updateMany({
                where : {
                    token : paymentInformation.token
                },
                data :{
                    status :"Success",
                }
            })
        ])
        res.json({
            message :"session captured"
        })
    }catch(e){
        console.error(e)
        res.json(411).json({
            message: "error while processing request"
        })
    }

})

// write the code for transaction

app.listen(port);

