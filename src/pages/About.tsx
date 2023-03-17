import { useState, useEffect, useRef } from 'react';
import { Title } from "../components/Title";
import Carrosel from '../components/Carrosel';

import Evento from '../assets/evento.jpg';
import Podcast from '../assets/podcast.jpg';

const About = () => {
 return(
  <div className="mt-20">
    <Title title="Sobre Mim" />

    <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
    <img src={Evento} alt="Evento foto" width={500} height={500} />

    <div>
      <h1 className="text-2xl text-black font-semibold">Evento <span className="text-[#f5d600] text-2xl font-semibold">Now</span></h1>
      <span className="text-lg text-black">Um evento transformador, liberado por Roberto Shinyashiki 
      (<a href="https://www.instagram.com/rshinyashiki/" target="_blank" className="text-primary">@rshinyashiki</a>)
      um Palestrante e médico Psiquiatra. <br />
      Ocorrido em São Paulo, fui convidado pelo meu Amigo Giovane Fenner
      (<a href="https://www.instagram.com/giofenner/" target="_blank" className="text-primary">@giofenner</a>)
      aceitei com o intuito de me colocar <br /> em um ambiente de crescimento com icones brasileiros do ramo.
      </span>
      
      <span className="text-lg text-black">
      Com duração de um final de semana, o evento foi de puro aprendizado com inúmeras trocas de Insights, trocas
      de conhecimentos.
      No evento aprendi a dominar a psicologia do sucesso, desenvolvi uma mente de aço, aprendi a origanizar minhas
      metas profissionais.
      </span>
    </div>
    </div>

    <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between mt-16">
     <div>
     <h1 className="text-2xl text-black font-semibold">Podcast <span className="text-[#f96d00] text-2xl font-semibold">Papo Reto</span></h1>
     <span className="text-black text-lg">Diretamente de Bauru, o podcast Papo Reto
      (<a href="https://www.instagram.com/paporetopodcast_oficial/" target="_blank" className="text-primary">@paporetopodcast_oficial</a>)
      O podcast tem como objetivo de mostrar as "pérolas" que temos em bauru e região, fui convidado para contar
      um pouco sobre minha história e principalmente sobre minha mentoria.
     </span>

     <div className="flex justify-center items-center mt-8 mb-12">
     <button className="relative text-black font-semibold bg-[#f96d00] hover:bg-[#e8751a] py-2 px-4 rounded-lg">
      <a href="https://www.youtube.com/watch?v=T_XcsedIKEs" target="_blank">
      Episódio do Podcast
      </a>
     </button>
      </div>


     </div>
    
    <img src={Podcast} alt="Podcast foto" width={500} height={500} />
    </div>

    <div className="mt-32">
    <Title title="Um pouco da minha História" />

    <div className="flex flex-col text-center justify-center mb-16">
    <span className="font-semibold text-black">
     38 anos, filho de Benedito e Creusa, irmão, companheiro, pai de Antonella e da Maya, comunicador por natureza e empresário.<br />
     Atualmente possui <span className="text-primary">mais de 200 alunos</span> no Brasil, México, Portugal e Japão, sendo a maioria no Brasil.<br />
     Começou a sua jornada em 2017. Com mais de 3 anos e experiência trabalhando com Desenvolvimento Pessoal, se encontrou <br />
     como treinador comportamental.
     Leva a premissa de que <span className="text-primary">a vida precisa ser leve para poder ser verdadeiramente prazerosa </span> 
     e que <span className="text-primary"> rotina é sinônimo de liberdade</span>.
    </span>
    <span className="font-semibold text-black">
     Formado em Licenciatura em Física pela Universidade de Londrina, com mestrado em Educação para a Ciência na <br />
     Universidade Estaual Paulista,UNESP, e pedagogo pela Universidade Nove e Julho, possui ainda diversas especializações <br />
     na área da educaçao e tem experiência de 20 anos em sala de aula do ensino médio, técnico e superior, além de 10 anos <br />
     como diretor pedagógico da escola particular de Educação Infantil, Fundamental e Ensino Médio. <br />
     Possui mais de 20 certificados com autenticidade em diversos cursos relacionados a Performance Pessoal, <br />
     Produtividade, Inteligência Emocional, Programação Neurolinguística, Neurociência, Liderança, Oratória, entre outros.
    </span>
    <span className="font-bold text-subtitle mt-4">O diferencial de <span className="text-primary">Jorge Andrade</span></span>
    <span className="font-semibold text-black mt-2">
      "Sábio, simples, prático, atencioso, focado e disciplinado"
      É o que falam os alunos qwue experimentam os treinamentos do Jorge, tanto presencial quanto online. <br />
      Conversando com mais de 50 pessoas diferentes por semana, em 3 anos, mais de Mil horas dando treinamentos e mentorias, ele criou <br />
      uma <span className="text-primary">metodoligia</span> que tem como ponto de partida a simplicidade e a eficácia, super flexível <br />
      e fácil de adaptar em qualquer cenário de seus alunos.<br />
      O grande diferencial é a prática. Os alunos estão o tempo todo em movimento e colocando a mão na massa para fazer acontecer.
    </span>
    </div>
    </div>
  </div>
 );
}
   
export default About;