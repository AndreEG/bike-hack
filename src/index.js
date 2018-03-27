/* silvia */
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './components/App';
/* import registerServiceWorker from './registerServiceWorker';
 */

firebase.initializeApp({
    apiKey: "AIzaSyACUMEFB5mNIE9E_oYfzC1Qg8dD80SyVwc",
    authDomain: "hackatonbikesantiago.firebaseapp.com",
    databaseURL: "https://hackatonbikesantiago.firebaseio.com",
    projectId: "hackatonbikesantiago",
    storageBucket: "hackatonbikesantiago.appspot.com",
    messagingSenderId: "482534686193"
})

ReactDOM.render(
<App/>
,document.getElementById('root'));
/* registerServiceWorker();
 */
/* silvia */

