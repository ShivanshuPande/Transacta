import express from "express";
import db from "@repo/db/client"
const app = express();

app.use(express.json());

const port = 3000;

app.post("/webhookhdfc" , async (req ,res)=>{
    const paymentInformation = {
        token : req.body.token,
        userId : req.body.user_identifier,
        amount : req.body.amount
    }
    
})

// write the code for transaction

app.listen(port);

