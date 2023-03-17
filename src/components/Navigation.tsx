import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

import { X, List } from 'phosphor-react';

const Navigation = () => {

 const [open, setOpen] = useState(false);

 return(
  <div className="shadow-md w-full fixed top-0 left-0">
   <div className="md:flex items-center justify-between bg-navbar py-4 md:px-10 px-7">
   <div>
   <a href="/">
   <h3 className="text-lg text-black font-semibold cursor-pointer">JA <span className="text-primary">Treinamentos</span></h3>
   </a>
   </div>
   
   <div
     onClick={() => setOpen(!open)} 
     className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
    >
    {open ? <X /> : <List /> }
   </div>

   <ul 
   className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-navbar md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'}`}
    >

     <li className="text-xl font-inter text-black font-medium hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7">
      <Link to="/">
        Home
      </Link>
     </li>

     <li className="text-xl font-inter text-black font-medium hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7">
      <Link to="/sobre">
        Sobre
      </Link>
     </li>

     <li className="text-xl font-inter text-black font-medium hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7">
      <Link to="/projetos">
        Projetos
      </Link>
     </li>

     <li className="text-xl font-inter text-black font-medium hover:underline decoration-primary mr-6">
      <Link to="/produtos">
        Produtos
      </Link>
     </li>

    <Button title="Contato" />
    </ul>

   </div>
  </div>
 );
}

export default Navigation;