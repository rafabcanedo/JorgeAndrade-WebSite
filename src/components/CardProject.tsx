import proj1 from '../assets/proj1.jpg';
import proj2 from '../assets/proj2.jpg';
import proj3 from '../assets/proj3.jpg';
import proj4 from '../assets/proj4.jpg';


type CardProps = {
 title: string;
 description: string;
 img?: string;
}

const Card = ({ title, description, img }: CardProps) => {
 return(
  <div className="w-full max-w-[400px] border-2 rounded-l-lg flex flex-col shadow-black">
  <div className="w-full h-32 max-w-full bg-navbar overflow-hidden">
    <img src={img} alt="Imagem Projeto" className="w-32 h-32" />
  </div>
  <div className="pl-6 pt-0 font-roboto bg-white">
  <h2 className="text-primary">{title}</h2>
  <p className="text-black">{description}</p>
  </div>
 </div>
 );   
}
const CardProject = () => {
 return(
 <div className="flex flex-row items-center gap-8">
 <Card title="Title" description="Description" img={proj1} />
 <Card title="Title" description="Description" img={proj2} />
 <Card title="Title" description="Description" img={proj3} />
 <Card title="Title" description="Description" img={proj4} />
 </div>
 );
}

export default CardProject;

/*
 <Card title="Title" description="Description" img={proj1} />
 <Card title="Title" description="Description" img={proj2} />
 <Card title="Title" description="Description" img={proj3} />
 <Card title="Title" description="Description" img={proj4} />
*/