require('dotenv').config();
const axios = require('axios');
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

const BASE_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

function getAxiosInstance() {
  return {
    get(method, params) {
      return axios.get(`/${method}`, {
        baseURL: BASE_URL,
        params,
      });
    },
    post(method, data) {
      return axios({
        method: 'post',
        baseURL: BASE_URL,
        url: `/${method}`,
        data,
      });
    }
  };
}

module.exports = { getAxiosInstance: getAxiosInstance() };