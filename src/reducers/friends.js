import { ADD_FRIEND, FETCH_FRIENDS_SUCCESS, REMOVE_FRIEND } from '../actions/actionTypes';

const defaultProfileState = [];

// profile reducer
export default function friends(state = defaultProfileState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      {
        return [...action.friends];
      }
      case ADD_FRIEND:
      {  
        state.concat(action.friend);
        console.log('hhhhhhhhhh',state);
        return state;
     
      }
        case REMOVE_FRIEND:
       {   const newArr=state.filter(
            (friend)=>friend.to_user._id!==action.userId
          );
          return newArr;
       }
    default:
      return state;
  }
}
