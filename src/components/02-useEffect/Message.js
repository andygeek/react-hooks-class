import React, { useEffect } from "react";

export const Message = () => {
  useEffect(()=>{
    window.addEventListener('mousemove', (e)=>{
      const coors = {x: e.x, y:e.y}
      console.log(coors);
    })
    return () => {
      console.log('Componente desmontado');
    }
  });

  return (
    <div>
      <h3>Soy genial</h3>
    </div>
  );
};
