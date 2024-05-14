import { base_url } from "./baseurl";
import { commonRequest } from "./commonStructure";

//add vedios
export const addVideoApi = async (bodyData) => {
  return await commonRequest("POST", `${base_url}/videos`, bodyData);
};

//acces videos
export const accessVideoApi = async () => {
  return await commonRequest("GET", `${base_url}/videos`, {});
};
//add Category
export const addCategoryApi = async (bodyData) => {
  return await commonRequest("POST", `${base_url}/categories`, bodyData);
};

//acces category
export const accessCategoryApi = async () => {
  return await commonRequest("GET", `${base_url}/categories`, {});
};

//delete video
export const deleteVideoApi = async (id) => {
  return await commonRequest("DELETE", `${base_url}/videos/${id}`, {});
};

//delete category
export const deleteCategoryApi = async (id) => {
  return await commonRequest("DELETE", `${base_url}/categories/${id}`, {});
};

//add Historyy
export const addHistoryApi = async (bodyData) => {
  return await commonRequest("POST", `${base_url}/histories`, bodyData);
};

//accces History
export const accessHistoryApi = async (bodyData) => {
  return await commonRequest("GET", `${base_url}/histories`, {});
};

//delete Histury
export const deleteHistoryApi = async (id) => {
  return await commonRequest("DELETE", `${base_url}/histories/${id}`, {});
};

//accces single video
export const accessSingleVideoApi = async (id) => {
  return await commonRequest("GET", `${base_url}/videos/${id}`, {});
};

//update category
export const updateCategoryApi = async (id, bodyData) => {
  return await commonRequest("PUT", `${base_url}/categories/${id}`, bodyData);
};
