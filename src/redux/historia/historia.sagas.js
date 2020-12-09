import { all, call, put, takeLatest } from "redux-saga/effects";
import { auth } from "../../firebase/utils";
import { setHistoria } from "./historia.actions";
import { handleAddHistoria, handleShowHistoria } from "./historia.helpers";
import historiaTypes from "./historia.types";

export function* addHistoria({ payload }) {
  console.log("veio na função add historia");
    try {
        const timestamp = new Date();
        yield handleAddHistoria({
            ...payload,
            adminUserUID: auth.currentUser.uid,
            createdDate: timestamp
        });

        yield put(
          onShowHistoriaStart()
        );
        console.log("salvou");
    } catch (err) {
        console.log(err);
    }

}

export function* onAddHistoriaStart() {
    console.log("veio no on Add start");
    yield takeLatest(historiaTypes.ADD_NEW_HISTORY_START, addHistoria);
}

export function* showHistoria() {
    try {
      const historia = yield handleShowHistoria();
      yield put(
        setHistoria(historia)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
export function* onShowHistoriaStart() {
  yield takeLatest(historiaTypes.SHOW_HISTORY, showHistoria);
}

export default function* historiaSagas() {
    yield all([
        call(onAddHistoriaStart),
        call(onShowHistoriaStart)
    ]);
}