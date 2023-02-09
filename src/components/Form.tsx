import React from 'react';
import { InstagramLogo, Phone, Envelope, WhatsappLogo, LinkedinLogo } from 'phosphor-react';

const Form = () => {
 return(
 <div className="flex w-full min-h-screen justify-center items-center">
  <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-primary opacity-70 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">

  <div className="flex flex-col space-y-8 justify-between">
   <div>
     <h1 className="font-bold text-4xl tracking-wide">
      Entre em Contato
     </h1>
     <p className="pt-2 text-[#dbd8e3] text-sm">
      Entre em contato comigo pelas redes sociais <br />
      ou pelo formulário disponível aqui
     </p>
   </div>

   <div className="flex flex-col space-y-6">
   <div className="inline-flex space-x-2 items-center cursor-pointer">
    <InstagramLogo size={32} weight="light" color="#000000" />
    <span className="text-black">@eusoujorgeandrade</span>
   </div>
   <div className="inline-flex space-x-2 items-center cursor-pointer">
   <Phone size={32} weight="light" color="#000000" />
    <span className="text-black">+55 (14) 997782272</span>
   </div>
   <div className="inline-flex space-x-2 items-center cursor-pointer">
   <Envelope size={32} weight="light" color="#000000" />
    <span className="text-black">mentoriajorgeandrade@gmail.com</span>
   </div>
   </div>
   
   <div className="flex space-x-4 text-lg">
    <a href="https://www.instagram.com/eusoujorgeandrade/">
     <InstagramLogo size={28} weight="light" color="#000000" />
    </a>
    <a href="#">
     <WhatsappLogo size={28} weight="light" color="#000000" />
   </a>
   <a href="#">
    <LinkedinLogo size={32} weight="light" color="#000000" />
   </a>
   </div>
  </div>

  <div>
<h3>Se </h3>
<h2>Entre em contato</h2>
  </div>
  
  </div>
 </div>
 );
}

export default Form;