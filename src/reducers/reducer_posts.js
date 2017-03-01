import {FETCH_POSTS, GET_POST} from '../actions/index';

const INITIAL_STATE = { all: [], post: null };
//all IS ALL OF THE POSTS THAT ARE RETURNED FROM FETCH_POSTS
//post IS THE CURRENTLY SELECTED POST

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_POST:
      return {...state, post: action.payload.data};
    case FETCH_POSTS:
      return {...state, all: action.payload.data} //action.payload.data is the response from the api
    default:
      return state;
  }
}
