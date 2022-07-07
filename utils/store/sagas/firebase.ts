import { call } from 'redux-saga/effects';
import { fireDb } from 'utils/firestore';
import { getDoc, doc, setDoc, DocumentSnapshot, addDoc, collection } from 'firebase/firestore';

function* getDocument(collectionName: string, documentId: string) {
  const docRef = doc(fireDb, collectionName, documentId);
  const docSnap: DocumentSnapshot<any> = yield call(getDoc, docRef);
  return docSnap;
}

function* setDocument(collectionName: string, documentId: string, merge: boolean = false, data: any): any {
  {
    try {
      const docRef = doc(fireDb, collectionName, documentId);
      yield call(setDoc, docRef, data, { merge: merge });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error setting document: ', e);
    }
  }
}

function* addDocument(collectionName: string, data: any) {
  try {
    yield call(addDoc, collection(fireDb, collectionName), data);
  } catch (error) {
    console.log(error);
  }
}

export { setDocument, addDocument, getDocument };
