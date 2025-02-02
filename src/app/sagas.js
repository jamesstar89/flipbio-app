import axios from 'axios';
import { takeEvery, select, call, put, all } from 'redux-saga/effects';
import { fbdb } from './firebase';
import { ref, query, get } from 'firebase/database';
import { updateAppState, appState } from './slices/appSlice';
import { loadSubjectState, updateSubjectState, subjectState } from './slices/subjectSlice';

let called = false;

// watch all
export default function* mySaga () {
  yield takeEvery(updateAppState.type, app);
  yield takeEvery(updateSubjectState.type, subject);
}

// redux, update tag categories **
function getTagCategories (userId) {
  axios
    .get(`https://request-bf66wb3ria-ue.a.run.app?userId=${userId}`, {
      responseType: 'text',
    })
    .then(function (response) {
      console.log(response.data);
    });
}

function getSubjects (userId) {
  const userRef = ref(fbdb, `userSubject/${userId}/subjects/`);
  const q = query(userRef);
  return new Promise(resolve => {
    get(q)
      .then((snapshot) => {
        const result = snapshot.val();
        const subjectArray = [];
        for (let i in result) {
          const subjectObject = {id: i};
          for (let j in result[i]) {
            subjectObject[j] = result[i][j];
          }
          subjectArray.push(subjectObject);
        }
        resolve(subjectArray);
      })
      .catch((error) => {
        console.log(error);
      });
  })
}

function getSubscriptions (activeSubscriptions, userId) {
  const userRef = ref(fbdb, `userSubscriptions/${userId}/subscriptions/${activeSubscriptions}`);
  const q = query(userRef);
  return new Promise((resolve) => {
    get(q)
      .then((snapshot) => {
        resolve(snapshot.val());
      })
      .catch((error) => {
        console.log(error);
      });
  })
}

function* subject () {
  console.log('subject saga triggered **');
  const currentAppState = yield select(appState);
  const {userId} = currentAppState;
  /**
   * 
   * Subjects
   * 
   */
    const subjects = yield call(getSubjects, userId);
    const currentSubjectState = yield select(subjectState);
    const newSubjectState = Object.assign({}, {...currentSubjectState}, {
      subjects
    });
    yield put(loadSubjectState(newSubjectState));
}

function* app () {
  if (!called) {
    called = true;
    const currentAppState = yield select(appState);
    const {activeSubscriptions, loggedIn, userId} = currentAppState;
    if (!loggedIn) return; // do no sagas
    /**
     * 
     * Subscriptions
     * 
     */
    const subscriptions = yield call(getSubscriptions, activeSubscriptions, userId);
    const newAppState = Object.assign({...currentAppState}, {subscriptions});
    updateAppState(newAppState);
    yield put(updateAppState(newAppState));
    /**
     * 
     * Tag categories
     * 
     */
    yield call(getTagCategories, userId);
  }
}