import React, { useState } from "react";
import FormSelect from "../../../components/forms/formSelect";
import Button from "./../../../components/forms/button";
import FormInput from "./../../../components/forms/form-input";
import { FaPlus } from "react-icons/fa";

import "./styles.scss";
import Modal from "./../../../components/modal";

const AddLocal = () => {

  const [hideModal, setHideModal] = useState(true);
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [categoriaLocal, setCategoriaLocal] = useState("");
  const [nomeLocal, setNomeLocal] = useState("");
  const [enderecoLocal, setEnderecoLocal] = useState("");
  const [imagemLocal, setImagemLocal] = useState("");
  const [linkLocal, setLinkLocal] = useState("");

  const toggleModal = () => setHideModal(!hideModal);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
  }
  const selectOptions = [
    {
      value: "",
      name: "Selecione",
    },
    {
      value: "mens",
      name: "Mens",
    },
    {
      value: "womens",
      name: "Womens",
    },
  ];

  const configModal = {
    hideModal,
    toggleModal,
  };

  return (
    <div className="addLocal">
      <h2>Adicionar novo Local</h2>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
            
            <ul>
              <li>
                <FormSelect
                  // label="Categoria"
                  options={selectOptions}
                  handleChange={(e) => setCategoriaLocal(e.target.value)}
                />
              </li>
              <li>
              <Button onClick={() => toggleModal()}>
                <FaPlus />
              </Button>
              </li>
            </ul>

          <FormInput
            label="Nome"
            type="text"
            value={nomeLocal}
            handleChange={(e) => setNomeLocal(e.target.value)}
          />

          <FormInput
            label="Endereço"
            type="text"
            value={enderecoLocal}
            handleChange={(e) => setEnderecoLocal(e.target.value)}
          />

          <FormInput
            label="Url imagem"
            type="url"
            value={imagemLocal}
            handleChange={(e) => setImagemLocal(e.target.value)}
          />

          <FormInput
            label="Link"
            type="url"
            value={linkLocal}
            handleChange={(e) => setLinkLocal(e.target.value)}
          />

          <Button type="submit">Adicionar Local</Button>
        </form>
      </div>
  
      <Modal {...configModal}>
        <div className="addCategoria">
          <form onSubmit={handleModalSubmit}>
            <h2>Adicionar nova Categoria</h2>

            <FormInput
              label="Nome"
              type="text"
              value={nomeCategoria}
              handleChange={(e) => setNomeCategoria(e.target.value)}
            />

            <Button type="submit">Adicionar</Button>
        </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddLocal;
