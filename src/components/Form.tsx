import React from 'react';
import { InstagramLogo, Phone, Envelope, WhatsappLogo, LinkedinLogo } from 'phosphor-react';

const Form = () => {
 return(
 <div className="flex w-full min-h-screen justify-center items-center">
  <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-primary w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">

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
   <div className="bg-white rounded-xl shadow-lg p-8 text-subtitle md:w-80">
     <form action="" className="flex flex-col space-y-4">
      <div>
        <label className="text-sm">Seu Nome</label>
     
        <input 
         type="text" 
         placeholder="Nome Completo" 
         className="ring-1 ring-form w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-navbar"
        />
      </div>

      <div>
        <label className="text-sm">Seu Email</label>

        <input 
         type="email" 
         placeholder="Seu Email" 
         className="ring-1 ring-form w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-navbar"
        />
      </div>

      <div>
        <label className="text-sm">Sua Mensagem</label>

        <textarea
         placeholder="Digite sua mensagem aqui"
         className="ring-1 ring-form w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-navbar"
        ></textarea>
      </div>

      <button 
       className="inline-block self-end bg-primary text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
      >
        Enviar Mensagem
      </button>

     </form>
   </div>
  </div>
  
  </div>
 </div>
 );
}

export default Form;