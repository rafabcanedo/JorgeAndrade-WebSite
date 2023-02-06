import { Link } from 'react-router-dom';
import { Button } from './Button';

const Navigation = () => {
 return(
  <div>
   <nav className="flex items-center justify-between h-20 bg-navbar px-8 py-4">
    <div>
     <h3 className="text-lg text-black font-semibold">Logo</h3>
    </div>

    <ul className="flex min-w-fit p-5">

     <li className="text-xl font-inter text-dark font-medium hover:underline decoration-primary mr-6">
      <Link to="/">
        Home
      </Link>
     </li>

     <li className="text-xl font-inter text-dark font-medium hover:underline decoration-primary mr-6">
      <Link to="/sobre">
        Sobre
      </Link>
     </li>

     <li className="text-xl font-inter text-dark font-medium hover:underline decoration-primary mr-6">
      <Link to="/projetos">
        Projetos
      </Link>
     </li>

     <li className="text-xl font-inter text-dark font-medium hover:underline decoration-primary mr-6">
      <Link to="/contato">
        Contato
      </Link>
     </li>
    </ul>

    <div>
     <Button title="Contato" />
    </div>
   </nav>
  </div>
 );
}

export default Navigation;