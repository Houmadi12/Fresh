import React from 'react';
import Mouton from '../../assets/ellipse13.c6f4eca8e6228d57f56e.png';
import Aubergine from '../../assets/ellipse16.5e4cf1920dfe6d4f24ab.png';
import PomdeTere from '../../assets/ellipse14.41bc555a487c94afb79a.png';
import jardinier from '../../assets/propose1.46578ef289f25658026b.png';
import jardin from '../../assets/headerbg.68e37491cb443024ae60.png';

function Graine() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
        
       
        <div className="flex flex-col items-center space-y-2 ">
          <img src={Mouton} alt="Mouton" className="w-44 h-44 " />
          <img src={Aubergine} alt="Aubergine" className="w-44 h-44" />
        </div>

        
        <div className="relative col-span-1">
          <img src={jardin} alt="Jardin" className="w-full h-full" />
        </div>

        
        <div className="flex flex-col items-center space-y-2 ">
          <img src={PomdeTere} alt="Pom de Tere" className="w-44 h-44 " />
          <img src={jardinier} alt="Jardinier" className="rounded-full w-44 h-44 " />
        </div>
      </div>
    </div>
  );
}

export default Graine;
