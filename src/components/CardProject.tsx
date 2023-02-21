import proj1 from '../assets/proj1.jpg';
import proj2 from '../assets/proj2.jpg';
import proj3 from '../assets/proj3.jpg';
import proj4 from '../assets/proj4.png';


type CardProps = {
 title: string;
 description: string;
 img?: string;
}

const Card = ({ title, description, img }: CardProps) => {
 return(
  <div className="flex mt-12">
  <div className="bg-[#363636] cursor-pointer p-8 rounded-xl ">
    <img src={img} alt="Imagem Projeto" className="w-32 h-32" />
  <div className="pl-6 pt-0 font-roboto bg-subtitle">
  <h2 className="uppercase text-xl font-semibold text-primary font-inter text-center mt-4">{title}</h2>
  <p className="text-white font-jost leading-7 my-3 opacity-50 justify-center">{description}</p>
  </div>
 </div>
 </div>
 );   
}

const CardProject = () => {
 return(
 <div className="flex max-w-5xl mx-auto gap-8 mt-12">
 <Card title="Title" description="Projeto em andamento" img={proj1} />
 <Card title="Title" description="Description" img={proj2} />
 <Card title="Title" description="Description" img={proj3} />
 <Card title="Title" description="Description" img={proj4} />
 </div>
 );
}

export default CardProject;