
type CardProps = {
 title: string;
 desecription: string;
 img?: string;
}

const Card = () => {
 return(
  <div className="w-full max-w-[400px] border-2 rounded-l-lg flex flex-col shadow-black">
  <div className="w-full h-32 max-w-full bg-navbar">
    <img src="" alt="Imagem Projeto" />
  </div>
  <div className="pl-6 pt-0 font-roboto bg-white">
  <h2 className="text-primary">Title</h2>
  <p className="text-black">Description</p>
  </div>
 </div>
 );   
}
const CardProject = () => {
 <>
 <Card />
 </>
}

export default CardProject;