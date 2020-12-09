import React, { useState } from "react";
import Button from "./../../../components/forms/button";
import CKEditor from "ckeditor4-react";

import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addHistoriaStart } from "../../../redux/historia/historia.actions";
import { useHistory } from "react-router-dom";

const mapState = ({ historia }) => ({
  historia: historia
});

const AddHistoria = () => {

  const { historia } = useSelector(mapState);
  const [description, setDesctiption] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addHistoriaStart({
       description 
      })
    );
    
    history.push('/dashboard-admin');

  }

  return (
    <div className="historia">
    
        <h2>História</h2>
        <div className="form-div">
          <form onSubmit={handleSubmit}>

            <CKEditor 
              value={historia}
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

export default AddHistoria;
