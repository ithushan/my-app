"use client"
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const back = () => {
    router.push('/');
  }
  return (
    <main className=" min-h-screen p-24">
      <button onClick={back} className="bg-blue-500 rounded text-white font-bold py-2 px-2">Back</button>
        <h1 className="text-gray-400">Dashboard</h1> 
    </main>
  );
}
