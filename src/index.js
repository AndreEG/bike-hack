/* silvia */
import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

firebase.initializeApp({
  apiKey: "AIzaSyACUMEFB5mNIE9E_oYfzC1Qg8dD80SyVwc",
  authDomain: "hackatonbikesantiago.firebaseapp.com",
  databaseURL: "https://hackatonbikesantiago.firebaseio.com",
  projectId: "hackatonbikesantiago",
  storageBucket: "hackatonbikesantiago.appspot.com",
  messagingSenderId: "482534686193"
})

const reducer=(state,action)=>{

  switch (action.type) {
		case 'NAVIGATE_TO':
			return {
				...state,
				paginaActual: action.pagina
			}
		default:
			return state;
  }
};

const initialState = {
  seccion: '',
  paginaActual:'pagina-1'
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
)


