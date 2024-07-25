import { LOGIN_SUCCESS, LOGOUT } from './Action';

const initialState = {
  user: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default Reducer;
