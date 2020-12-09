import React, { useState } from "react";
import Button from "./../../../components/forms/button";
import FormInput from "./../../../components/forms/form-input";
import CKEditor from "ckeditor4-react";

import "./styles.scss";

const AddNews = () => {

  const [title, setTitle] = useState("");
  const [description, setDesctiption] = useState("");
  const [image, setImagem] = useState("");
  
  const resetForm = () => {
      setTitle("");
      setDesctiption("");
      setImagem("");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  }

  return (
    <div className="addNew">
    
        <h2>Adicionar nova Notícia</h2>
        <div className="addNewNoticia">
          <form onSubmit={handleSubmit}>
        
            <FormInput
              label="Título"
              type="text"
              value={title}
              handleChange={(e) => setTitle(e.target.value)}
            />

            <FormInput
              label="Url imagem"
              type="url"
              value={image}
              handleChange={(e) => setImagem(e.target.value)}
            />

            <CKEditor 
              onChange={e => setDesctiption(e.editor.getData())}
            />
            <br/>
            <Button type="submit">Adicionar Noticia</Button>
            <br/>
          </form>
        </div>

    </div>

  );
};

export default AddNews;
