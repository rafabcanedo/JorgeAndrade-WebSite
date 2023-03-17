import React from 'react';
import { Title } from './Title';

import Hiratuka from '../assets/a.jpg';
import Gabriela from '../assets/gabriela.jpg';
import Giovana from '../assets/giovanna.png';

const Feedbacks = () => {
 return(
  <div className="max-w-[1240px] mx-auto relative mb-10">
    <Title title="Feedback" />
    <h1 className="text-xl text-subtitle w-96 mx-auto leading-normal text-center">
      O que meus mentorados estão falando sobre mim?
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-3 reltive gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20">
     <div className="bg-[#f2f2f2] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl">
      <img src={Gabriela} alt="foto feedback"  className="rounded-full h-20 mx-auto" />
      <h4 className="uppercase text-xl font-semibold text-primary font-inter text-center mt-4">Gabriela Agostinho</h4>
      <p className="text-black font-jost leading-7 my-3 opacity-50 justify-start">
       Entrei na mentoria com ação, clareza<br />
       e decidi qual a vida que gostaria de criar e segui o <br />
       melhor caminho.
      </p>
     </div>
     <div className="bg-[#f2f2f2] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl">
      <img src={Hiratuka} alt="foto feedback"  className="rounded-full h-20 mx-auto" />
      <h4 className="uppercase text-xl font-semibold text-primary font-inter text-center mt-4">Thais Hiratuka</h4>
      <p className="text-black font-jost leading-7 my-3 opacity-50 justify-start">
       Hoje tenho clareza, coragem para tomar decisões e <br />
       construir uma rotina produtiva, me sinto acolhida <br />
       na Comunidade Let's Push
      </p>
     </div>
     <div className="bg-[#f2f2f2] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl ">
      <img src={Giovana} alt="foto feedback"  className="rounded-full h-20 mx-auto" />
      <h4 className="uppercase text-xl font-semibold text-primary  font-inter text-center mt-4">Giovana Krall</h4>
      <p className="text-black font-jost leading-7 my-3 opacity-50 justify-start">
       Aprendi que eu tenho que me  preocupar com  <br />
       minhas metas sem esperar a aprovação dos <br />
       outros e que o momento certo é o agora.
      </p>
    </div>
    </div>
  </div>
 );
}

export default Feedbacks;

// text-[#ffc93c] amarelo