import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fafaf9] text-center dark:bg-neutral-700 lg:text-left mt-[-20px]">
      <div className="bg-black/5 p-9 text-center text-surface dark:text-white text-xl">
        © 2024 Copyright:
        <a href="/" className="font-semibold text-xl">
          Task Manager
        </a>
      </div>
    </footer>
  );
};

export default Footer;
