import React, { useState } from "react";

import "./styles.scss";
import FormInput from "./../forms/form-input";
import FormTextArea from "../forms/formTextArea";
import Button from "../forms/button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [desciption, setDescription] = useState("");

  return (
    <div className="contact">
      <h1>Contato</h1>

        <div className="bg">
      <div className="contactForm">
        <form>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="text"
            name="assunto"
            value={assunto}
            placeholder="Assunto"
            handleChange={(e) => setAssunto(e.target.value)}
          />

          <FormTextArea
            className="description"
            type="text"
            name="desciption"
            value={desciption}
            placeholder="Descrição"
            handleChange={(e) => setDescription(e.target.value)}
          />

          <br />

          <Button type="submit">
              Enviar
          </Button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
