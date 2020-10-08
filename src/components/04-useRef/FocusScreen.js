import React, {useRef} from "react";
import "./style.css";

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} type="text" className="form-control" placeholder="name" />
      <button onClick={handleClick} className="btn btn-outline-primary mt-2">Focus</button>
    </div>
  );
};
