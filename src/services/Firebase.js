import firebase from 'firebase';

class Firebase {
    loginByEmail = (email, password, onComplete, onFail) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                onComplete(user)
            })
            .catch(error => {
                onFail(error)
            })
    };

    signOut = (onComplete, onFail) => {
        firebase.auth().signOut()
            .then(() =>  {
                onComplete()
            })
            .catch(error => {
                onFail(error)
            })
    };

    resetPassword = (email, onComplete, onFail) => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                onComplete()
            })
            .catch(error => {
                onFail(error);
            })
    };

    getUserAuth = (onComplete, onFail) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user !== null) {
            onComplete(user)
        } else {
            onFail()
        }
      })
    };

    getDocumentByCollection = (collection, onComplete, onFail) => {
        let db = firebase.firestore();
        db.collection(collection).doc().get()
            .then(response => {
                onComplete(response)
            })
            .catch(error => {
                onFail(error)
            })
    };

    getDocumentByCollectionAndDocumentName = (collection, doc, onComplete, onFail) => {
        let db = firebase.firestore();
        db.collection(collection).doc(doc).get()
            .then(response => {
                onComplete(response)
            })
            .catch(error => {
                onFail(error)
            })
    };

    getDocumentByQuery = (collection, field, comp, value, onComplete, onFail) => {
        let db = firebase.firestore();
        db.collection(collection).where(field, comp, value).get()
            .then(querySnapshot => {
                let data = [];
                querySnapshot.forEach(doc => {
                   data.push(doc.data());
                });
                onComplete(data);
            })
            .catch(error => {
                onFail(error)
            })
    };

    deleteDocument = (collection, doc, onComplete, onFail) => {
        let db = firebase.firestore();
        db.collection(collection).doc(doc).delete()
            .then(() => {
                onComplete();
            })
            .catch(error => {
                onFail(error);
            })
    };

}

export default new Firebase();
