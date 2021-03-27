import { createSelector } from "reselect";

const getCompanies = (state) => state.companies;
const getUsers = (state) => state.users;
const getCars = (state) => state.cars;

export const getData = createSelector(
  getCompanies,
  getUsers,
  getCars,
  (companies, users, cars) => {
    return companies
      .map((company) => {
        return {
          ...company,
          owner: { ...users.find((user) => company.owner === user.id) },
        };
      })
      .map((company) => {
        return {
          ...company,
          owner: {
            ...company.owner,
            car: { ...cars.find((car) => car.id === company.owner.car) },
          },
        };
      });
  }
);
