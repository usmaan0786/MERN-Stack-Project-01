import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-[#e9e9e9cc] text-center p-4">
      © {new Date().getFullYear()} SomeCompany, Inc. All rights reserved.
    </footer>
  );
};

export default Footer;
