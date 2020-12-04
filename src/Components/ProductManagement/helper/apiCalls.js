import { isAuthenticated } from "../../Auth/helper/authApis";

const { API } = require("../../../backend");

export const getCategories = () => {
  return fetch(`${API}categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getSubCategories = (categoryId) => {
  return fetch(`${API}subcategories/${categoryId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getProducts = (subCategoryId) => {
  return fetch(`${API}productsbysubcategory/${subCategoryId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getProductById = (productId) => {
  return fetch(`${API}product/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const addProduct = (data) => {
  const { id, token } = isAuthenticated();
  return fetch(`${API}product/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const addCategory = (data) => {
  const { id, token } = isAuthenticated();
  return fetch(`${API}category/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const addSubCategory = (data) => {
  const { id, token } = isAuthenticated();
  return fetch(`${API}subcategory/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const updateProduct = (data) => {
  const { id, token } = isAuthenticated();

  return fetch(`${API}product/${id}/${data._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const uploadFile = (data) => {
  const { id, token } = isAuthenticated();

  return fetch(`${API}upload/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
