import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Title } from "../components/Title";
import { YoutubeLogo } from 'phosphor-react';

import Evento from '../assets/evento.jpg';
import Podcast from '../assets/podcast.jpg';
import foco from '../assets/foco.png';
import foco2 from '../assets/foco2.jpg';
import foco3 from '../assets/foco3.jpg';
import foco4 from '../assets/foco4.png';

const images = [foco, foco2, foco3, foco4]

const About = () => {
 const carousel = useRef();
 const [width, setWidth] = useState(0)

 useEffect(() => {
  console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
  setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
 }, [])

 return(
  <div className="mt-8">
    <Title title="Sobre Mim" />

    <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
    <img src={Evento} alt="Evento foto" width={500} height={500} />

    <div>
      <h1 className="text-2xl font-semibold">Evento <span className="text-[#f5d600] text-2xl font-semibold">Now</span></h1>
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
     <h1 className="text-2xl font-semibold">Podcast <span className="text-[#f96d00] text-2xl font-semibold">Papo Reto</span></h1>
     <span>Diretamente de Bauru, o podcast Papo Reto
      (<a href="https://www.instagram.com/paporetopodcast_oficial/" target="_blank" className="text-primary">@paporetopodcast_oficial</a>)
      O podcast tem como objetivo de mostrar as "pérolas" que temos em bauru e região, fui convidado para contar
      um pouco sobre minha história e principalmente sobre minha mentoria.
     </span>

     <div className="flex justify-center items-center mt-8">
     <button className="relative text-white font-semibold bg-primary py-2 px-4 rounded-lg">
      <a href="https://www.youtube.com/watch?v=T_XcsedIKEs" target="_blank">
      Episódio do Podcast
      </a>
     </button>
     {/*<a href="https://www.youtube.com/watch?v=T_XcsedIKEs" target="_blank">
      <YoutubeLogo size={32} weight="light" color="red" />
      </a>*/}
      </div>


     </div>
    
    <img src={Podcast} alt="Podcast foto" width={500} height={500} />
    </div>

    <div className="mt-32">
    <Title title="Um pouco da minha História" />

    <div className="w-full max-w-4xl m-auto min-h-screen flex items-center justify-center">
    
      <motion.div ref={carousel} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
       <motion.div 
        className="flex"
        drag="x"
        dragConstraints={{ right: 0, left: -width}}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
       >

        {images.map(image => (
          <motion.div className="min-h-[200px] min-w-[400px] p-3.5" key={image}>
            <img src={image} alt="Image Carrosel" className="w-full h-[90%] rounded-xl pointer-events-none" />
          </motion.div>
        ))}
       </motion.div>
      </motion.div>

    </div>

    <div className="flex flex-col text-center justify-center">
    <span className="font-semibold text-black">
     Durante toda a minha vida estudei a evolução tecnologica, nessa época não tinha tido contato com a programação. <br />
     Este contato veio no começo da minha vida adulta, onde ja tinha 10 anos de jogos eletronicos.<br />
     Comecei a estudar <span className="text-primary">C#</span>, dps migrei para o Java. Quando conheci o desenvolvimento web com php 
     e html fiquei surpreso pela quantidade<br /> de possibilidades possíveis para fazer <span className="text-primary">aplicações web</span> em geral.
    </span>
    <span className="font-semibold text-black">
     Esse texto é um exemplo de uma biografia simples e objetivo com minha imagem em um carrosel <br />
     Penmso em açaí todos os dias sem parar, tipo todos os dias mesmo com morango e banana, de 500ml <br />
     Cresci muito, evolui muito, tudo é uma questão de prática e disciplina
    </span>
    <span className="font-bold mt-4">Por que decidi seguir com as <span className="text-primary">Mentorias?</span></span>
    <span className="font-semibold text-black mt-2">
      A ideia da mentoria foi justamente para expandir meu conhecimento, ajudar outras pessoas <br />
      a ir de encontro com suas metas e me forçar a sempre estar estudando
    </span>
    </div>
    </div>
  </div>
 );
}
   
export default About;