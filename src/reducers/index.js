import { combineReducers } from 'redux';
import myheadertext from './reducer-header';
import mimap from './reducer-section';


const rootReducer = combineReducers ({
  mapita : mimap,
  myHeader : myheadertext
});

export default rootReducer;