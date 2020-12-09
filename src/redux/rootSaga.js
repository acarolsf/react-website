import { all, call } from 'redux-saga/effects';
import historiaSagas from './historia/historia.sagas';
import productsSagas from './products/products.sagas';
import userSagas from './user/user.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(productsSagas),
        call(historiaSagas),
    ]);
}