import { ArrowLeft, ArrowRight } from "phosphor-react";
import foco from '../assets/foco.png';
import foco2 from '../assets/foco2.jpg';
import foco3 from '../assets/foco3.jpg';
import foco4 from '../assets/foco4.png';

const slides = [foco, foco2, foco3, foco4]

export default function Carrosel() {
 return(
  <div className="overflow-hidden relative">
   <div className="flex"></div>
   <div className="absolute inset-0 flex items-center justify-between p-4">
    <button className="p-1 rounded-full shadow bg-subtitle text-black hover:bg-white">
     <ArrowLeft size={40} />
    </button>
    <button>
     <ArrowRight size={40} />
    </button>
   </div>
  </div>
 )
}