import { InstagramLogo, TiktokLogo, WhatsappLogo } from 'phosphor-react';

import Construction from '../assets/construcao.png';
import { Title } from '../components/Title';

import Image from '../assets/foco4.png';

const Projects = () => {
 return(
  <div className="mt-24">
  <Title title="Minhas Redes" />
  <div className="container mx-auto">
  <div className="flex flex-col xl:flex-row gap-24">
  <img src={Image} alt="Foto Leitura" className="object-cover h-full w-[556px] md:mx-auto lg:mx-0 rounded-2xl" />
  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
   <div className="flex flex-col">
    <h2 className="text-3xl text-black font-medium mb-3">Jorge Andrade</h2>
    <p className="mb-4 text-primary">Mentor de Produtividade</p>
    <hr className="mb-8 opacity-5" />
    <p className="mb-8 text-black">
    "Sábio, simples, prático, atencioso, focado e disciplinado" É o que falam os alunos qwue experimentam os treinamentos do Jorge, tanto presencial quanto online.
    Conversando com mais de 50 pessoas diferentes por semana, em 3 anos, mais de Mil horas dando treinamentos e mentorias, ele criou
    uma metodoligia que tem como ponto de partida a simplicidade e a eficácia, super flexível
    e fácil de adaptar em qualquer cenário de seus alunos.
    O grande diferencial é a prática. Os alunos estão o tempo todo em movimento e colocando a mão na massa para fazer acontecer.
    </p>
   </div>

   <div className="flex text-subtitle gap-8 items-end">
    <a href="https://www.instagram.com/eusoujorgeandrade/" target="_blank">
    <InstagramLogo size={35} className="hover:text-primary" />
    </a>
    <a href="https://api.whatsapp.com/send?phone=5514997782272&text=" target="_blank">
    <WhatsappLogo size={35} className="hover:text-primary" />
    </a>
    <a href="https://www.tiktok.com/@eusoujorgeandrade14" target="_blank">
    <TiktokLogo size={35} className="hover:text-primary" />
    </a>
   </div>
  </div>
  </div>
  </div>
  
  <div className="mt-8">
  <Title title="Projetos" />

  <div className="h-screen mt-32">
  <div className="text-center">
    <h2 className="font-bold text-2xl">PÁGINA EM CONSTRUÇÃO 👷‍♂️</h2>
    <div className="flex justify-center items-center">
    <img src={Construction} alt="Imagem Pagina em contrução" width="800" height="800" />
    </div>
  </div>
  </div>

  </div>
  </div>
 );
}
   
export default Projects;