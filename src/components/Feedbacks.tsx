import React from 'react';
import Canedo from '../assets/canedo.jpg';
import { Title } from './Title';

const Feedbacks = () => {
 return(
    <div>
    <Title title="Feedback" />
    <h1 className="text-xl text-subtitle w-96 mx-auto leading-normal text-center">
      O que meus mentorados estão falando sobre mim?
    </h1>
    <div className="flex max-w-5xl mx-auto gap-8 mt-12 group">
     <div className="bg-dark duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
      <img src={Canedo} alt="foto feedback"  className="rounded-full h-20 mx-auto" />
      <h4 className="uppercase text-xl font-semibold text-primary font-inter text-center mt-4">Rafael Canedo</h4>
      <p className="text-white font-jost leading-7 my-3 opacity-50 justify-start">
       Teste Canedo musculoso e modelo teste teste teste teste <br />
       Alo alo alo açaí sem granola por favor
       aaaa bbbb cccc
      </p>
     </div>
     <div className="bg-dark duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl">
      <img src={Canedo} alt="foto feedback"  className="rounded-full h-20 mx-auto" />
      <h4 className="uppercase text-xl font-semibold text-[#38598b] font-inter text-center mt-4">Rafael Canedo</h4>
      <p className="text-white font-jost leading-7 my-3 opacity-50 justify-start">
       Teste Canedo musculoso e modelo teste teste teste teste <br />
       Alo alo alo açaí sem granola por favor
       aaaa bbbb cccc
      </p>
     </div>
     <div className="bg-dark duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl ">
      <img src={Canedo} alt="foto feedback"  className="rounded-full h-20 mx-auto" />
      <h4 className="uppercase text-xl font-semibold text-[#ffc93c] font-inter text-center mt-4">Rafael Canedo</h4>
      <p className="text-white font-jost leading-7 my-3 opacity-50 justify-start">
       Teste Canedo musculoso e modelo teste teste teste teste <br />
       Alo alo alo açaí sem granola por favor
       aaaa bbbb cccc
      </p>
     </div>
    </div>
  </div>
 );
}

export default Feedbacks;