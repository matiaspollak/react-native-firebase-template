import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAW2DijnbVKMCNpMWUTNdl3BZkHTjUdurU', //found in Console
    authDomain: 'test-project-dd16a.firebaseapp.com', //projectID.firebaseapp.com
    databaseURL: 'https://test-project-dd16a.firebaseio.com', // https://project-id.firebaseio.com
    projectId: 'test-project-dd16a', //project ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };