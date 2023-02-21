import React from "react";
import { InstagramLogo, WhatsappLogo, TiktokLogo, Envelope } from 'phosphor-react';

const Footer = () => {
 return (
  <footer className="mt-16 p-16 bg-navbar relative text-test left-0 w-full">
   <div className="w-3/4 m-8 flex justify-between items-center">
    <div className="flex flex-col justify-center items-center">
    <h3 className="text-lg text-white font-semibold cursor-pointer">Logo</h3>

    <div className="flex items-center m-8 gap-3">
     
     <a href="https://www.instagram.com/eusoujorgeandrade/"  target="_blank">
      <InstagramLogo size={25} color="#fff" />
     </a>

     <a href="https://www.tiktok.com/@eusoujorgeandrade14" target="_blank">
     <TiktokLogo size={25} color="#fff" />
     </a>

     <a href="https://api.whatsapp.com/send?phone=5514997782272&text=" target="_blank">
     <WhatsappLogo size={25} color="#fff" />
     </a>

     <a href="#" target="_blank">
     <Envelope size={25} color="#fff" />
     </a>

    </div>
    </div>

    <div className="list-none w-1/2 grid grid-cols-2 grid-rows-3 gap-4">

     <a className="text-lg cursor-pointer w-fit text-test semibold text-white hover:underline decoration-primary">
      Home
     </a>

     <a className="text-lg cursor-pointer w-fit text-test semibold text-white hover:underline decoration-primary">
      Sobre
     </a>

     <a className="text-lg cursor-pointer w-fit text-test semibold text-white hover:underline decoration-primary">
      Projetos
     </a>

     <a className="text-lg cursor-pointer w-fit text-test semibold text-white hover:underline decoration-primary">
      Contato
     </a>
    </div>
    </div>

    <div>
     <span className="text-white">
      &copy; {new Date().getFullYear()} Canedo. All rights reserved. 💛
     </span>
    </div>

  </footer>
 );
}

export default Footer;