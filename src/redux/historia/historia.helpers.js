import { firestore } from "./../../firebase/utils";

const collectionName = "historia";

export const handleAddHistoria = (historia) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .doc()
      .set(historia)
      .then(() => {
        console.log("veio aqui == salvar no firebase")
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleShowHistoria = () => {
    return new Promise((resolve, reject) => {
      firestore
        .collection(collectionName)
        .get()
        .then(snapshot => {
          if (snapshot.exists) {
            resolve(snapshot.data());
          }
        })
        .catch(err => {
          reject(err);
        })
    });
  };