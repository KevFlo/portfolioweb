import React from "react";

function Footer() {
  return (
    // fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
    <div className="fixed bottom-0 left-0 z-20 w-full p-4 flex flex-wrap ">
      <footer className="absolute inset-x-0 bottom-0 bg-[#141414] h-14 flex justify-center text-white">
        <div className="bg-[#141414] flex justify-center ">
          <p className="bg-[#141414] shadow-lg flex justify-center ">
            Copyright &copy; kevinflores.net 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;