import { Title } from '../components/Title';
import Image1 from '../assets/comRp.png';
import Image2 from '../assets/destravando.png';

const Produtos = () => {
 return(
  <div className="mt-8">
   <div className="flex justify-center">
   <img src={Image2} alt="Foto Logo Destravando a Produtividade" />
   </div>
    <div className="flex flex-col text-center justify-center mt-4 gap-2">
    <h2 className="font-medium text-xl mt-6 mb-8 underline decoration-primary text-center">Destravando a Produtividade</h2>
    <span className="font-inter text-base">
     A solução definitiva para ter mais disciplina. O treinamento Destravando a Produtividade <br />
     é a melhor maneira de combater os seus inimigos internos e externos através de um método simples <br />
     e eficiente para melhorar sua performance e tornar a sua vida mais leve.
    </span>
    <span className="font-inter text-base">
     A performance exige método e é exatamente isso que entrego nesse treinamento, com ferramentas comprovadas <br />
     pela ciência e metodologia validada por mais de 200 pessoas, até o momento.
    </span>

    <div className="flex flex-col mt-10 font-roboto text-base">
     <span>+ de 20 aulas sobre Produtividade, Motivação, Planejamento, entre outras ferramentas</span>
     <span>Acesso exclusivo ao treinador do curso</span>
     <span>Comunidade de alunos no WhatsApp</span>
     <span>1 aula <span className="text-primary">AO VIVO</span> por mês</span>
     <span>Acesso vitalício com atualizações</span>
    </div>

    <div className="mt-8">
     <a href="https://jorgeandrade2.orbitpages.online/aula-gratuita-inscricao?v=6410f906e682a" target="_blank">
     <button className="bg-primary text-white hover:bg-[#379956] font-semibold py-2 px-4 rounded-lg">Quero Participar</button>
     </a>
    </div>
    </div>
   
    <div className="mt-32">
     <div className="flex justify-center">
     <img src={Image1} alt="Foto Logo Comunidade RP" />
     </div>
     <div className="flex flex-col text-center justify-center mt-4 gap-2">
      <span className="font-inter text-base">
       Toda Segunda-Feira, às 5h47 da manhã, pessoas que querem acabar de vez com a procrastinação, <br />
       melhorar os seus hábitos e bater todos os Recordes Pessoais se reúnem em um ambiente online e fechado <br />
       para membros e compartilham conhecimento sobre Produtividade, Disciplina, Motivação, Planejamento Pessoal, <br />
       Rotina e muito mais.
       Para alcançar seus Recordes Pessoais é preciso ser consistente e isso que entrego na comunidade RP.
      </span>

      <div className="flex flex-col mt-10 font-roboto text-base">
      <span>1 encontro semanal <span className="text-primary">AO VIVO</span> com interação direta com o mentor e todos os membros</span>
      <span>Acesso diário ao mentor via WhatsApp</span>
      <span>Grupo exclusivo no WhatsApp com membros da Comunidade</span>
      <span>Acompanhamento diário a sua produtividade através do Diário da Produtividade</span>
      <span>Plantão de planejamento pessoal aos finais de semana</span>
      <span>1 aula mensal sobre o livro do mês</span>
      <span>Acesso a plataforma com todos os encontros gravados, ferramentas práticas, materiais de apoio e muito mais</span>
     </div>
     

     <div className="mt-8">
     <a href="https://api.whatsapp.com/send?phone=5514997782272&text=" target="_blank">
     <button className="bg-primary text-white hover:bg-[#379956] font-semibold py-2 px-4 rounded-lg mb-8">Ir para Comunidade</button>
     </a>
    </div>

    </div>
    </div>
  </div>
 );
}
   
export default Produtos;