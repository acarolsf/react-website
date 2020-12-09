import historiaTypes from "./historia.types";

const INITIAL_STATE = {
    historia: "",
};

const historiaReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
       
        case historiaTypes.SET_HISTORY:
            return {
                ...state,
                historia: action.payload
            }
        default:
            return state;
    }
}

export default historiaReducer;