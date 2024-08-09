"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import blogData from "../data/blogData";

export default function Blog() {
  const router = useRouter();

  const handleNavigation = (title) => {
    router.push(`/blog/${title}`);
  };

  return (
    <main className="flex flex-wrap justify-center min-h-screen p-24 bg-gray-100">
      <h1 className="text-3xl font-bold mb-12 text-center w-full">Blog Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <button
                onClick={() => handleNavigation(post.title)}
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                {post.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
