import {PrismaClient} from "@repo/db/client";

const client = new PrismaClient();

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen text-5xl font-bold">
      Hello there
    </div>
  );
}
