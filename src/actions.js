import { SET_COMPANIES, SET_USERS, SET_CARS } from "./constants";

export const fetchCompanies = () => async (dispatch) => {
  return await fetch("https://605e465a9386d200171bc087.mockapi.io/companies")
    .then((res) => res.json())
    .then((companies) => dispatch({ type: SET_COMPANIES, payload: companies }));
};

export const fetchUsers = () => async (dispatch) => {
  return await fetch("https://605e465a9386d200171bc087.mockapi.io/users")
    .then((res) => res.json())
    .then((users) => dispatch({ type: SET_USERS, payload: users }));
};

export const fetchCars = () => async (dispatch) => {
  return await fetch("https://605e465a9386d200171bc087.mockapi.io/cars")
    .then((res) => res.json())
    .then((cars) => dispatch({ type: SET_CARS, payload: cars }));
};
