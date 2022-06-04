import axios from "axios";
const endPoint = "localhost";

export default {
  async get(path, options) {
    return axios
      .get(`${endPoint}${path}`, options)
      .then((response) => response.data);
  },
  async post(path, body, options) {
    return axios
      .post(`${endPoint}${path}`, body, options)
      .then((response) => response.data);
  },
  async update(path, body, options) {
    return axios
      .put(`${endPoint}${path}`, body, options)
      .then((response) => response.data);
  },
  async delete(path, options) {
    return axios.delete(`${endPoint}${path}`, options);
  },
};
