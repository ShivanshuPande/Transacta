import { Button } from "./button";


interface AppBarProps {
    user? :{
        name? : string | null ;
    }
    onSignin :any ,
    onSignOut : any
}
export default function Appbar(){
    return (
        <div>
            <div>
                Transacta
            </div>
            <div>
                
            </div>
        </div>
    )
}