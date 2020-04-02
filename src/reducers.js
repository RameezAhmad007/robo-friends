// const initialState = {
//   fname: "",
//   lname: "",
//   email: "",
//   password: "",
//   confirm_password: ""
// };

// export const reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case "INPUT_CHANGE":
//       console.log("update State : ", state);
//       return {
//         ...state,
//         [action.payload.name]: action.payload.value
//       };
//     case "INPUT_SUBMIT":
//       action.payload.preventDefault();

//       let dataToSubmit = {
//         email: state.email,
//         password: state.password
//       };
//       console.log("Data To Submit : ", dataToSubmit);
//       return {
//         ...state,
//         submit_data: dataToSubmit
//       };
//     default:
//       return {
//         ...state
//       };
//   }
// };

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    // return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
  errorStatus: false
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOT_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOT_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });
    case REQUEST_ROBOT_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        errorStatus: true,
        isPending: false
      });
    default:
      return state;
  }
};
