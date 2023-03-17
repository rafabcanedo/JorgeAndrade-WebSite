import React from "react";
import { InstagramLogo, WhatsappLogo, TiktokLogo, Envelope } from 'phosphor-react';

const Footer = () => {
 return (
  <footer className="bg-navbar py-12">
   <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">

    <div className="flex space-x-6 items-center justify-center">
     
     <a href="https://www.instagram.com/eusoujorgeandrade/"  target="_blank">
      <InstagramLogo size={25} color="#000" />
     </a>

     <a href="https://www.tiktok.com/@eusoujorgeandrade14" target="_blank">
     <TiktokLogo size={25} color="#000" />
     </a>

     <a href="https://api.whatsapp.com/send?phone=5514997782272&text=" target="_blank">
     <WhatsappLogo size={25} color="#000" />
     </a>

     <a href="#" target="_blank">
     <Envelope size={25} color="#000" />
     </a>

    </div>

    <div>
     <h3 className="text-lg text-black font-semibold cursor-pointer">JA <span className="text-primary">Treinamentos</span></h3>
    </div>
     <span className="text-black">
      &copy; {new Date().getFullYear()} Canedo. All rights reserved. 💛
     </span>
    </div>
    </div>

  </footer>
 );
}

export default Footer;