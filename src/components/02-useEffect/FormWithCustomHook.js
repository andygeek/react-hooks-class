import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handlerInputChange] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("El email cambio");
  }, [email])

  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handlerInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handlerInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****"
          value={password}
          onChange={handlerInputChange}
        />
      </div>
    </>
  );
};
