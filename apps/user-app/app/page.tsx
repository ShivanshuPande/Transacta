import db from  "@repo/db/client";
import { Card } from "../../../packages/ui/src/components/card";

export default function Home() {
  return (
    <div>
        <div className="flex justify-center items-center text-5xl font-bold">
        Hello there
      </div>
          <Card/>
        
    </div>
  );
}
