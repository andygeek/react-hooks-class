import React, { useEffect } from "react";

export const Message = () => {
  const mouseMove = (e) => {
    const coors = { x: e.x, y: e.y };
    console.log(coors);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  return (
    <div>
      <h3>Soy genial</h3>
    </div>
  );
};
