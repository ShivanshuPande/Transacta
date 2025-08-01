import  db  from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";

// providers needs the three --- credentialsProvider(getting the credentials(name , credentials) , authorizing it , create it ) , secret , callbacks

export const authOptions = {
    providers :[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                name : {label : "Name" , type: "text" , placeholder : "Name" , required :true},
                number: {label: "Phone Number" , type : 'text' , placeholder : "97XXXXXX09" , required :true}, 
                password : {label : "Password"  , type : 'password' , placeholder : "password"}
            }, 

            async authorize(credentials:any) { 
                const hashedPassword = await bcrypt.hash(credentials.password , 0 );
                const existingUser = await db.user.findFirst({
                    where : {
                        number : credentials.number
                    }
                });

                if(existingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password , existingUser.password);
                    if(passwordValidation){
                        return {
                            id : existingUser.id.toString(),
                            name : existingUser.name,
                            email : existingUser.email,
                            number : existingUser.number
                        }
                    }
                    return null ;

                }

                try {
                    const user = db.user.create({
                        data:{
                            name : credentials.name ,
                            number : credentials.number,
                            password: hashedPassword

                        }
                    });

                    return {
                        id : (await user).id.toString(),
                        name : (await user).name ,
                        email: (await user).email,
                        number:(await user).number
                    }
                }catch(error){
                    console.log(error)
                }

                return null;
            }

            
        })
        
    ] ,

    secret : process.env.NEXTAUTH_SECRET ,
    
    callbacks :{

        async session({token , session } :{token : JWT , session : any}){
            session.user.id = token.sub

            return session;
        }
    }
}