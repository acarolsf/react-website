import React, { useState } from "react";
import Button from "./../../../components/forms/button";
import FormInput from "./../../../components/forms/form-input";

import "./styles.scss";

const AddEvent = () => {

  const [nomeEvento, setNomeEvento] = useState("");
  const [dataEvento, setDataEvento] = useState(new Date());
  const [localEvento, setLocalEvento] = useState("");
  const [linkEvento, setLinkEvento] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="addEvento">
    
        <h2>Adicionar novo evento</h2>
        <div className="addNewEvent">
          <form onSubmit={handleSubmit}>
            
            <FormInput
                label="Data"
                type="date"
                value={dataEvento}
                handleChange={(e) => setDataEvento(e.target.value)}
            />
            <FormInput
              label="Nome"
              type="text"
              value={nomeEvento}
              handleChange={(e) => setNomeEvento(e.target.value)}
            />

            <FormInput
              label="Local"
              type="text"
              value={localEvento}
              handleChange={(e) => setLocalEvento(e.target.value)}
            />

            <FormInput
              label="Link"
              type="url"
              value={linkEvento}
              handleChange={(e) => setLinkEvento(e.target.value)}
            />

            <Button type="submit">Adicionar Evento</Button>
          </form>
        </div>

    </div>

  );
};

export default AddEvent;
