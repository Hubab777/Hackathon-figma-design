"use client"
import Image from "next/image";

function ErrorPage() {
  return (
    <div className="justify-center items-center md: place-items-center wrapper">
      
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/err.png"
          alt="404"
          width={600}
          height={600}
        />
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn`&apos`t find the page.</p>
      </div>
    
    </div>
  );
}

export default ErrorPage;
