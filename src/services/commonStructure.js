import axios from "axios";

export const commonRequest = async (method, url, body) => {
  let conifg = {
    method,
    url,
    data: body,
  };
  return await axios(conifg)
    .then((result) => {
      return result;
    })
    .catch((result) => {
      return result;
    });
};
