import { db } from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// providers needs the three --- credentialsProvider(getting the credentials , authorizing it , create it ) , secret , callbacks

export const authOptions = {
    providers :[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                phone: {label: "Phone Number" , type : 'text' , placeholder : "97XXXXXX09" , required :true}, 
                password : {label : "Password"  , type : 'password' , placeholder : "password"}
            }, 

            async authorize(credentials:any) {
                const hashedPassword = await bcrypt.hash(credentials.password , 0 );
                const existingUser = await db.user.findFirst({
                    where : {
                        number : credentials.phone
                    }
                });

                if(existingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password , existingUser.password);
                    if(passwordValidation){
                        return {
                            id : existingUser.id.toString(),
                            name : existingUser.name,
                            email : existingUser.number
                        }
                    }
                    return null ;

                }

                try {
                    const user = db.user.create({
                        data:{
                            number : credentials.phone,
                            password: hashedPassword

                        }
                    });

                    return {
                        id : (await user).id.toString(),
                        name : (await user).name ,
                        email: (await user).email
                    }
                }catch(error){
                    console.log(error)
                }

                return null;
            }

            
        })
        
    ] ,

    secret : 
}