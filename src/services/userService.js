import axios from "axios";
const api = "https://jsonplaceholder.typicode.com/users/";

// get all users from json placeholder api
export function getAllUser() {
  return axios.get(api);
}

// get specific user by id from json placeholder api
export function getSpecificUser(id) {
  return axios.get(`${api}${id}`);
}

// post new user to json placeholder api
