"use client"
import { useRouter } from "next/navigation";

export default function ({ params }) {
    const router = useRouter();

    const back = () => {
        router.push('/blog');
    }
    return (
        <div>
            <main className="min-h-screen  p-24">
                <h3>Test dynamic URL !</h3>
                <p>
                    URL IS : {params.slug}
                </p>
                <button onClick={back} className="bg-blue-500 rounded text-white font-bold py-2 px-2">Back</button>
            </main>

        </div >
    )
}