import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return (
    <div className="flex justify-center items-center border-b ">
        <div className="text-lg flex flex-col justify-center p-4">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2 pl-4">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>)
}