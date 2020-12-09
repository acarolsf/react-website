import React, { useState } from "react";
import Button from "./../../../components/forms/button";
import CKEditor from "ckeditor4-react";

import "./styles.scss";

const AddSobreCaico = () => {

  const [description, setDesctiption] = useState("");
  
  const resetForm = () => {
      setDesctiption("");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  }

  return (
    <div className="sobreCaico">
    
        <h2>Sobre Caicó</h2>
        <div className="form-div">
          <form onSubmit={handleSubmit}>

            <CKEditor 
              onChange={e => setDesctiption(e.editor.getData())}
            />

            <br/>
            <Button type="submit">Adicionar</Button>
            <br/>
          </form>
        </div>

    </div>

  );
};

export default AddSobreCaico;
