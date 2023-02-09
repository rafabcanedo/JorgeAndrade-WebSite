import React from "react";
import { Link } from 'react-router-dom';
import { Pencil, CalendarCheck, LightbulbFilament, BookOpen, ChatCenteredText, Chats, Handshake, PenNib } from 'phosphor-react';

import { Title } from "../components/Title";
import Feedbacks from "../components/Feedbacks";

import LogoJorge from '../assets/logoJorge.jpg';
import Incentivo from '../assets/Incentivo.png';

const Home = () => {
 return(
  <>
  <section className="min-h-screen flex py-10 md:flex-row flex-col items-center">
   <div className="flex-1 flex items-center justify-center h-full">
    <img src={LogoJorge} alt="Logo JATreinamentos" width={600} height={600} className="rounded-2xl" />
   </div>

   <div className="flex-1">
   <h3 className="font-jost text-dark font-bold text-2xl">
      Eu sou Jorge Andrade, um mentor de <br />
      Produtividade e Planejamento Pessoal
     </h3>
     <span className="font-jost text-subtitle font-semibold text-xl">
      Te ajudo a construir a hábitos saudáveis e uma mentalidade inabalável
     </span>

     <div className="flex gap-8 mt-8">
     <a href="https://api.whatsapp.com/send?phone=5514997782272&text=" target="_blank">
     <button className="relative text-white font-semibold bg-primary py-2 px-4 rounded-lg">
      Fale Comigo
     </button>
     </a>
     <Link to="/projetos">
     <button className="relative border-2 font-medium border-primary bg-transparent py-2 px-4 rounded-lg text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
      Meus Projetos
     </button>
     </Link>
   </div>
   </div>
  </section>

  <div>
  <div>
    <Title title="Text" />
    <h1 className="text-xl w-96 mx-auto leading-normal text-center">
      O que meus mentorados estão falando sobre mim?
    </h1>
    <div className="flex max-w-5xl mx-auto gap-8 mt-12">
     <div className="bg-dark cursor-pointer p-8 rounded-xl ">
     <BookOpen color="#00ad0C" size={30} />
      <h4 className="uppercase text-xl font-semibold text-primary font-inter text-center mt-4">Title</h4>
      <p className="text-white font-jost leading-7 my-3 opacity-50 justify-start">
       Teste Canedo musculoso e modelo teste teste teste teste <br />
       Alo alo alo açaí sem granola por favor
       aaaa bbbb cccc
      </p>
     </div>
     <div className="bg-dark cursor-pointer p-8 rounded-xl">
     <PenNib color="#00ad0C" size={30} />
      <h4 className="uppercase text-xl font-semibold text-primary font-inter text-center mt-4">Title</h4>
      <p className="text-white font-jost leading-7 my-3 opacity-50 justify-start">
       Teste Canedo musculoso e modelo teste teste teste teste <br />
       Alo alo alo açaí sem granola por favor
       aaaa bbbb cccc
      </p>
     </div>
     <div className="bg-dark cursor-pointer p-8 rounded-xl">
     <Chats color="#00ad0C" size={30} />
      <h4 className="uppercase text-xl font-semibold text-primary font-inter text-center mt-4">Title</h4>
      <p className="text-white font-jost leading-7 my-3 opacity-50 justify-start">
       Teste Canedo musculoso e modelo teste teste teste teste <br />
       Alo alo alo açaí sem granola por favor
       aaaa bbbb cccc
      </p>
     </div>
    </div>
  </div>
  </div>

  <div className="min-h-screen flex py-10 md:flex-row flex-col items-center justify-center">
  <div >
   <h3 className="font-jost text-dark font-bold text-2xl">
    Construindo uma rotina inabalável ao lado da Produtividade
   </h3>
   <div className="flex flex-col mt-4 gap-2">
   <span className="font-jost text-subtitle font-medium text-xl">Está cansado de correr e não chegar ao Objetivo?</span>
   <span className="font-jost text-subtitle font-medium text-xl">Está com uma grande inspiração, mas não sabe para onde ir?</span>
   </div>
  

  <div className="mt-12">
   <div className="flex gap-6">
   <Pencil size={32} weight="light" color="#00ad0c" />
   <span className="text-dark text-lg font-jost font-normal">Defenir suas metas de vida</span>
   </div>
   <div className="flex gap-6">
   <LightbulbFilament size={32} weight="light" color="#00ad0c" />
   <span className="text-dark text-lg font-jost font-normal">Construir sua rotina para atingir as metas</span>
   </div>
   <div className="flex gap-6">
   <CalendarCheck size={32} weight="light" color="#00ad0c" />
   <span className="text-dark text-lg font-jost font-normal">Chegar ao objetivo com todo o caminho feito</span>
   </div>
  </div>
  </div>

  <div>
  <img src={Incentivo} alt="Cartoon Incentivos" width={600} height={600} />
  </div>
  </div>

  <Feedbacks />
  </>
 );
}

export default Home;