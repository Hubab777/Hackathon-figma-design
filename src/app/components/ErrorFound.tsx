"use client"
import Image from "next/image";

function ErrorPage() {
  return (
    <div className=" bg-gray-50 min-h-screen wrapper">
      {/* Header */}

      <header className="bg-purple-100 text-center py-8">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-left pl-20 text-[#111C85]">Error Page</h1>
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 text-left pl-20 mt-2">
            <span className="text-[#727272]">Home .</span>
            
            <span className="text-[#727272]">Pages</span>
            
            <span className="text-pink-500 font-semibold"> .ErrorFound</span>
          </p>
        </div>
      </header>
      
      <div className="flex flex-col items-center justify-center md: place-items-center min-h-screen">
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
