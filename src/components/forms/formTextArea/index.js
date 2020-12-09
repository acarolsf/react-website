import React from 'react';

import './styles.scss';

const FormTextArea = ({ handleChange, label, ...otherProps}) => {
    return (
        <div className="formRow">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <textarea className="formInput" onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default FormTextArea;
