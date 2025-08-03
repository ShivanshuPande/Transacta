
import {Appbar} from "@repo/ui/components/appbar";
import { Card } from "@repo/ui/components/card";

export default function Home() {
  return (
    <div>
        <div className="flex justify-center items-center text-5xl font-bold">
        Hello there
      </div>
      <div>
        <Appbar/>
        <Card/>
      </div>
        
    </div>
  );
}
