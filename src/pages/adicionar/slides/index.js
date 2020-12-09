import React, { useState } from "react";
import Button from "./../../../components/forms/button";
import FormInput from "./../../../components/forms/form-input";

import "./styles.scss";

const AddSlides = () => {

  const [slide1, setSlide1] = useState("");
  const [slide2, setSlide2] = useState("");
  const [slide3, setSlide3] = useState("");
  
  const resetForm = () => {
      setSlide1("");
      setSlide2("");
      setSlide3("");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  }

  return (
    <div className="addSlide">
    
        <h2>Adicionar slides</h2>
        <div className="form-div">
          <form onSubmit={handleSubmit}>

            <FormInput
              label="Url Slide 1"
              type="url"
              value={slide1}
              handleChange={(e) => setSlide1(e.target.value)}
            />

            <FormInput
              label="Url Slide 2"
              type="url"
              value={slide2}
              handleChange={(e) => setSlide2(e.target.value)}
            />

            <FormInput
              label="Url Slide 3"
              type="url"
              value={slide3}
              handleChange={(e) => setSlide3(e.target.value)}
            />

            <br/>
            <Button type="submit">Adicionar</Button>
            <br/>
          </form>
        </div>

    </div>

  );
};

export default AddSlides;
