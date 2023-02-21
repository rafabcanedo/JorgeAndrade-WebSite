import { InstagramLogo, TiktokLogo, Envelope, WhatsappLogo, LinkedinLogo } from 'phosphor-react';

import CardProject from '../components/CardProject';
import { Title } from '../components/Title';

import Image from '../assets/foco4.png';

const Projects = () => {
 return(
  <div className="mt-8">
  <Title title="Minhas Redes" />
  <div className="container mx-auto">
  <div className="flex flex-col xl:flex-row gap-24">
  <img src={Image} alt="Foto Leitura" className="object-cover h-full w-[556px] md:mx-auto lg:mx-0 rounded-2xl" />
  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
   <div className="flex flex-col">
    <h2 className="text-3xl text-white font-medium mb-3">Jorge Andrade</h2>
    <p className="mb-4 text-primary">Mentor de Produtividade</p>
    <hr className="mb-8 opacity-5" />
    <p className="mb-8 text-white">
     Duartina, desde minha infancia apaixonado por leitura me tornei professor e ao longo
     dos anos vi o meu papael na sociedade, expandir conhecimento e ajudar pessoas a encontrarem
     seu caminho. <br />
     Depois de 75959 anos dando aula, migrei meu trabalho para home office empenhando o papel de Mentor
     de Produtividade e estou té hoje na ativa.
    </p>
   </div>

   <div className="flex text-subtitle gap-8 items-end">
    <a href="https://www.instagram.com/eusoujorgeandrade/">
    <InstagramLogo size={35} className="hover:text-primary" />
    </a>
    <a href="https://api.whatsapp.com/send?phone=5514997782272&text=">
    <WhatsappLogo size={35} className="hover:text-primary" />
    </a>
    <a href="www.tiktok.com/@eusoujorgeandrade14">
    <TiktokLogo size={35} className="hover:text-primary" />
    </a>
   </div>
  </div>
  </div>
  </div>
  
  <div className="mt-8">
  <Title title="Projetos" />

  <CardProject />
  </div>
  </div>
 );
}
   
export default Projects;