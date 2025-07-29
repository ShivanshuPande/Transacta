import db from  "@repo/db/client";

export default function Home() {
  return (
    <div>
        <div className="flex justify-center items-center h-screen text-5xl font-bold">
        Hello there
      </div>
          
      <div>
        This is the second component of the page
      </div>
    </div>
  );
}
