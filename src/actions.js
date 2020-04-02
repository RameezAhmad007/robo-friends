import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from "./constants";

// export const onInputChange = e => {
//   return {
//     type: "INPUT_CHANGE",
//     payload: e.target
//   };
// };

// export const onSubmit = e => {
//   return {
//     type: 'INPUT_SUBMIT',
//     payload: e,
//   }
// }

export const onSearchChange = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const onRequestRobots = dispatch => {
  dispatch({ type: REQUEST_ROBOT_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOT_FAILED, payload: error }));
};
