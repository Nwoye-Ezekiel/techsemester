import { Types } from "../Types/Types";

const INITIAL_STATE = {
  loading: false,
  authedUser: false,
  userDetails: [],
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.REGISTER_USER_START:
    case Types.LOGIN_USER_START:
    case Types.POST_QUESTION_START:
    case Types.GET_USER_DETAILS_START:
      return {
        ...state,
        loading: true,
      };

    case Types.REGISTER_USER_SUCCESS:
    case Types.REGISTER_USER_FAILURE:
    case Types.LOGIN_USER_FAILURE:
    case Types.POST_QUESTION_SUCCESS:
    case Types.POST_QUESTION_FAILURE:
    case Types.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case Types.LOGIN_USER_SUCCESS:
    case Types.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        authedUser: true,
        userDetails: action.payload,
      };

    default:
      return state;
  }
};
