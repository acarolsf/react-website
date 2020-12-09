import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistoria, showHistoriaStart } from '../../redux/historia/historia.actions';

import './styles.scss';

const mapState = state => ({
    historia: state.historiaData.historia
});

const History = () => {

    const dispatch = useDispatch();
    const { historia } = useSelector(mapState);
    const { description } = historia;

    useEffect(() => {
        dispatch(
            showHistoriaStart()
        );
        return () => {
            dispatch(setHistoria({}));
        }
    }, [dispatch])

    return (
        <div className="history">
            <h1>
                História
            </h1>

            <p>
            <span dangerouslySetInnerHTML={{__html: description}} />
            </p>
        </div>
    );
}

export default History;