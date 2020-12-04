import React, { useState, useEffect } from "react";
import Base from "../Base";
import {
  addProduct,
  getCategories,
  getProductById,
  getProducts,
  getSubCategories,
  updateProduct,
  addCategory,
  addSubCategory,
  uploadFile,
} from "./helper/apiCalls";

export default function ProductManagement() {
  const [pageView, setPageView] = useState({
    category: false,
    subCategory: false,
    product: false,
  });
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    _id: undefined,
    dsc: "",
    features: [],
    stocks: [],
    name: "",
    category: "",
    subCategory: "",
    disclaimer: "",
    images: [],
  });
  const [stock, setStock] = useState({
    active: true,
    mrp: "",
    sellPrice: "",
    unit: "",
    moQty: "",
  });

  useEffect(() => {
    loadCategories();
  }, []);
  const loadCategories = () => {
    getCategories().then((res) => {
      if (res.status === 0) {
        alert(res.error);
      } else {
        setCategories(res);
      }
    });
  };
  const loadSubCategories = (categoryId) => {
    getSubCategories(categoryId).then((res) => {
      if (res.status === 0) {
        alert(res.error);
      } else {
        setSubCategories(res);
      }
    });
  };
  const loadProducts = (subCategoryId) => {
    getProducts(subCategoryId).then((res) => {
      if (res.status === 0) {
        alert(res.error);
      } else {
        setProducts(res);
      }
    });
  };

  return (
    <Base>
      <div className="row container-fluid m-0 p-0 justify-content-center p-4 align-items-center">
        <div className="border p-4 rounded shadow col-9">
          <h1 className="text-center display-4">Product Management</h1>
          <div className="row container-fluid m-0 p-0">
            <div className="input-group col-6 mb-4">
              <label>Category</label>
              <div className="input-group">
                <select
                  className="custom-select"
                  onChange={(e) => {
                    setPageView({
                      ...pageView,
                      category: e.target.value,
                      subCategory: false,
                      product: false,
                    });

                    setProduct({
                      ...product,
                      _id: undefined,
                      dsc: "",
                      features: [],
                      stocks: [],
                      name: "",
                      category: e.target.value,
                      subCategory: "",
                      disclaimer: "",
                      images: [],
                    });
                    setSubCategories([]);
                    setProducts([]);
                    loadSubCategories(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Select Category
                  </option>

                  {categories.map((c, i) => {
                    return (
                      <option key={i} value={c._id} className="">
                        {c.name}
                      </option>
                    );
                  })}
                </select>
                <div className="input-group-append">
                  <button
                    type="button"
                    className="input-group-text btn "
                    data-toggle="modal"
                    data-target="#categoryModel"
                  >
                    Add New
                  </button>
                </div>
              </div>
            </div>
            {pageView.category && (
              <div className="input-group col-6 mb-4">
                <label>Sub Category</label>
                <div className="input-group">
                  <select
                    className="custom-select"
                    onChange={(e) => {
                      setPageView({
                        ...pageView,
                        subCategory: e.target.value,
                        product: false,
                      });
                      setProduct({
                        ...product,
                        _id: undefined,
                        dsc: "",
                        features: [],
                        stocks: [],
                        name: "",
                        subCategory: e.target.value,
                        disclaimer: "",
                        images: [],
                      });
                      setProducts([]);
                      loadProducts(e.target.value);
                    }}
                  >
                    <option disabled selected>
                      Select Sub Category
                    </option>

                    {subCategories.map((sc, i) => {
                      return (
                        <option key={i} value={sc._id} className="">
                          {sc.name}
                        </option>
                      );
                    })}
                  </select>
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="input-group-text btn "
                      data-toggle="modal"
                      data-target="#subCategoryModel"
                    >
                      Add New
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {pageView.subCategory && (
            <div className="row container-fluid m-0 p-0">
              <div className="input-group col-6 mb-4">
                <label>Product</label>
                <div className="input-group">
                  <select
                    className="custom-select"
                    onChange={(e) => {
                      getProductById(e.target.value).then((res) => {
                        if (res.status === 0) {
                          alert(res.error);
                        } else {
                          setProduct(res);
                          setPageView({ ...pageView, product: res._id });
                        }
                      });
                    }}
                  >
                    <option disabled selected>
                      Select Product
                    </option>

                    {products.map((p, i) => {
                      return (
                        <option key={i} value={p._id} className="">
                          {p.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {
                <div className=" col-2 mb-4">
                  <div
                    className="input-group"
                    style={{ position: "absolute", bottom: "0" }}
                  >
                    <div
                      className="btn btn-warning"
                      onClick={() => {
                        setPageView({
                          ...pageView,
                          product: true,
                        });
                        setProduct({
                          ...product,
                          _id: undefined,
                          dsc: "",
                          features: [],
                          stocks: [],
                          name: "",
                          disclaimer: "",
                          images: [],
                        });
                      }}
                    >
                      Add New
                    </div>
                  </div>
                </div>
              }
              {product._id && (
                <div className="input-group col-2 mb-4">
                  <div
                    className="btn btn-warning"
                    style={{ position: "absolute", bottom: "0" }}
                    onClick={() => {
                      alert("Feature Not Added Yet");
                    }}
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>
          )}
          <div>
            {/* product */}
            {pageView.product && (
              <div className="row container-fluid m-0 p-0 justify-content-center">
                <div className="col-6">
                  {/* name */}
                  <div className="input-group mb-4">
                    <label>Name</label>
                    <div className="input-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={product.name}
                        onChange={(e) => {
                          setProduct({ ...product, name: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  {/* features */}
                  <div className="input-group mb-4">
                    <label>Features</label>
                    <div className="input-group">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Features"
                        onBlur={(e) => {
                          e.preventDefault();
                          if (e.target.value.trim() === "") {
                            return;
                          }
                          var x = product.features;
                          x.push(e.target.value);
                          setProduct({ ...product, features: x });
                          e.target.value = "";
                        }}
                      />
                    </div>
                    <div className="col">
                      {product.features &&
                        product.features.map((f, i) => {
                          return (
                            <div
                              className="row justify-content-center border-bottom align-items-center"
                              key={i}
                            >
                              <div
                                className="p col-11"
                                style={{
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {f}
                              </div>
                              <div
                                className="btn col-1 text-center p-0 m-0 h-100 w-100"
                                onClick={() => {
                                  var x = product.features;
                                  x.splice(i, 1);
                                  setProduct({
                                    ...product,
                                    features: x,
                                  });
                                }}
                              >
                                <svg
                                  width="2em"
                                  height="2em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-x  h-100 w-100"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                  />
                                </svg>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  {/* stock */}
                  <div className="input-group mb-4">
                    <label>Stocks</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mrp"
                        value={stock.mrp}
                        onChange={(e) => {
                          setStock({ ...stock, mrp: e.target.value });
                        }}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sell Price"
                        value={stock.sellPrice}
                        onChange={(e) => {
                          setStock({ ...stock, sellPrice: e.target.value });
                        }}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Unit Name"
                        value={stock.unit}
                        onChange={(e) => {
                          setStock({ ...stock, unit: e.target.value });
                        }}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Min Order Quantity"
                        value={stock.moQty}
                        onChange={(e) => {
                          setStock({ ...stock, moQty: e.target.value });
                        }}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <input
                            type="checkbox"
                            defaultChecked={stock.active}
                            placeholder="Active"
                            onClick={(e) => {
                              setStock({ ...stock, active: !stock.active });
                            }}
                          />
                        </div>
                      </div>
                      <div className="input-group-append">
                        <button
                          className="btn input-group-text"
                          type="button"
                          onClick={(e) => {
                            if (
                              stock.mrp.trim() === "" ||
                              !parseInt(stock.mrp)
                            ) {
                              alert("Please a valid mrp");
                              return;
                            }
                            if (
                              stock.sellPrice.trim() === "" ||
                              !parseInt(stock.sellPrice)
                            ) {
                              alert("Please a valid selling price");
                              return;
                            }

                            var x = product.stocks;
                            x.push(stock);
                            setProduct({
                              ...product,
                              stocks: x,
                            });
                            setStock({
                              active: true,
                              mrp: "",
                              sellPrice: "",
                              unit: "",
                              moQty: "",
                            });
                          }}
                        >
                          <svg
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 16 16"
                            className="bi bi-check2"
                            fill="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="">
                      {product.stocks &&
                        product.stocks.map((s, i) => {
                          return (
                            <div
                              className="row justify-content-center align-items-center m-0 p-0"
                              key={i}
                            >
                              <div className="input-group mt-1">
                                <input
                                  type="text"
                                  className="form-control bg-white"
                                  value={s.mrp}
                                  disabled
                                />
                                <input
                                  type="text"
                                  className="form-control bg-white"
                                  value={s.sellPrice}
                                  disabled
                                />
                                <input
                                  type="text"
                                  className="form-control bg-white"
                                  value={s.unit}
                                  disabled
                                />
                                <input
                                  type="text"
                                  className="form-control bg-white"
                                  value={s.moQty}
                                  disabled
                                />
                                <div className="input-group-append">
                                  <div className="input-group-text bg-white">
                                    <input
                                      type="checkbox"
                                      className=""
                                      checked={s.active}
                                      placeholder="Active"
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="input-group-append">
                                  <button
                                    className="btn input-group-text"
                                    type="button"
                                    onClick={(e) => {
                                      var x = product.stocks;
                                      x.splice(i, 1);
                                      setProduct({
                                        ...product,
                                        stocks: x,
                                      });
                                    }}
                                  >
                                    <svg
                                      width="1.5em"
                                      height="1.5em"
                                      viewBox="0 0 16 16"
                                      className="bi bi-x"
                                      fill="#000000"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* images */}
                  {product._id && (
                    <div className="col m-0 p-0 mb-4">
                      <div className="input-group">
                        <label>Images</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              accept="image/png,image/gif,image/jpeg"
                              id="fileInput"
                              onChange={(e) => {
                                if (!e.target.files[0]) {
                                  return;
                                }
                                if (e.target.files[0].size > 2097152) {
                                  alert("File size cannot be more than 2mb.");
                                  return;
                                }
                                document.getElementById(
                                  "fileStatus"
                                ).innerText = "Uploading File...";
                                document.getElementById("fileLabel").innerText =
                                  e.target.files[0].name;
                                var formData = new FormData();
                                formData.set("file", e.target.files[0]);
                                formData.set("for", "product");
                                formData.set("forId", product._id);
                                uploadFile(formData).then((res) => {
                                  if (res.status === 0) {
                                    alert(res.error);
                                  } else {
                                    document.getElementById(
                                      "fileStatus"
                                    ).innerText = "File Uploaded Successfully";
                                    var x = product.images;
                                    x.push(res);
                                    setProduct({ ...product, images: x });
                                  }
                                });
                              }}
                            />
                            <label
                              className="custom-file-label"
                              style={{ overflow: "hidden" }}
                              id="fileLabel"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                        <p id="fileStatus"> </p>
                      </div>
                      <div className="col">
                        {product.images &&
                          product.images.map((img, i) => {
                            return (
                              <div
                                className="row justify-content-center border-bottom align-items-center"
                                key={i}
                              >
                                <div
                                  className="p col-11"
                                  style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {img.name}
                                </div>
                                <div
                                  className="btn col-1 text-center p-0 m-0 h-100 w-100"
                                  onClick={() => {
                                    var x = product.images;
                                    x.splice(i, 1);
                                    setProduct({
                                      ...product,
                                      images: x,
                                    });
                                  }}
                                >
                                  <svg
                                    width="2em"
                                    height="2em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-x  h-100 w-100"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                  {/* description */}
                  <div className="input-group mb-4">
                    <label>Description</label>
                    <div className="input-group">
                      <textarea
                        name="dsc"
                        id="dsc"
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={product.dsc}
                        onChange={(e) => {
                          setProduct({
                            ...product,
                            dsc: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  {/* disclaimer */}
                  <div className="input-group mb-4">
                    <label>Disclaimer</label>
                    <div className="input-group">
                      <textarea
                        name="disclaimer"
                        id="disclaimer"
                        type="text"
                        className="form-control"
                        placeholder="Disclaimer"
                        value={product.disclaimer}
                        onChange={(e) => {
                          setProduct({
                            ...product,
                            disclaimer: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="btn col-4 border"
                  onClick={(e) => {
                    if (product.name.trim() === "") {
                      alert("Please enter a name");
                      return;
                    }
                    if (product.stocks[0] === undefined) {
                      alert("Please add a stock");
                      return;
                    }

                    if (!product._id) {
                      delete product._id;
                      delete product.images;
                      addProduct(product).then((res) => {
                        if (res.status === 0) {
                          alert(res.error);
                        } else {
                          setProduct(res);
                          alert("Product added successfully");
                          loadProducts(pageView.subCategory);
                        }
                      });
                    } else {
                      updateProduct(product).then((res) => {
                        if (res.status === 0) {
                          alert(res.error);
                        } else {
                          setProduct(res);
                          alert("Product updated successfully");
                          loadProducts(pageView.subCategory);
                        }
                      });
                    }
                  }}
                >
                  {product._id ? "Update" : "Add"}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="modals">
        <div
          className="modal fade"
          id="categoryModel"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="categoryModelLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="categoryModelLabel">
                  Add New Category
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-4">
                  <input
                    id="cateName"
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                  />
                </div>
                <div className="input-group mb-4">
                  <textarea
                    id="cateDsc"
                    className="form-control"
                    placeholder="Category Description"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    var category = {
                      name: document.getElementById("cateName").value.trim(),
                      dsc: document.getElementById("cateDsc").value.trim(),
                    };
                    if (category.name === "") {
                      alert("Enter Category Name");
                      return;
                    }
                    addCategory(category).then((res) => {
                      if (res.status === 0) {
                        alert(res.error);
                        return;
                      }
                      alert("Category Added.");
                      document.getElementById("cateName").value = "";
                      document.getElementById("cateDsc").value = "";
                      loadCategories();
                    });
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="subCategoryModel"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="subCategoryModelLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="subCategoryModelLabel">
                  Add New Sub Category
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sub Category Name"
                    id="scateName"
                  />
                </div>
                <div className="input-group mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Sub Category Description"
                    id="scateDsc"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    var scategory = {
                      name: document.getElementById("scateName").value.trim(),
                      dsc: document.getElementById("scateDsc").value.trim(),
                      category: pageView.category,
                    };
                    if (scategory.name === "") {
                      alert("Enter Category Name");
                      return;
                    }
                    addSubCategory(scategory).then((res) => {
                      if (res.status === 0) {
                        alert(res.error);
                        return;
                      }
                      alert("Sub Category Added.");
                      document.getElementById("scateName").value = "";
                      document.getElementById("scateDsc").value = "";
                      loadSubCategories(pageView.category);
                    });
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div style={{ display: "flex", overflowX: "auto" }}>
          <div className="col" style={{ float: "left" }}>
            11111111111111
          </div>
          <div className="col" style={{ float: "left" }}>
            22222222222222
          </div>
          <div className="col" style={{ float: "left" }}>
            33333333333333
          </div>
          <div className="col" style={{ float: "left" }}>
            44444444444444
          </div>
          <div className="col" style={{ float: "left" }}>
            11111111111111
          </div>
          <div className="col" style={{ float: "left" }}>
            22222222222222
          </div>
          <div className="col" style={{ float: "left" }}>
            33333333333333
          </div>
          <div className="col" style={{ float: "left" }}>
            44444444444444
          </div>
          <div className="col" style={{ float: "left" }}>
            11111111111111
          </div>
          <div className="col" style={{ float: "left" }}>
            22222222222222
          </div>
          <div className="col" style={{ float: "left" }}>
            33333333333333
          </div>
          <div className="col" style={{ float: "left" }}>
            44444444444444
          </div>
          <div className="col" style={{ float: "left" }}>
            11111111111111
          </div>
          <div className="col" style={{ float: "left" }}>
            22222222222222
          </div>
          <div className="" style={{ float: "left" }}>
            33333333333333
          </div>
          <div className="" style={{ float: "left" }}>
            44444444444444
          </div>
          <div className="" style={{ float: "left" }}>
            11111111111111
          </div>
          <div className="" style={{ float: "left" }}>
            22222222222222
          </div>
          <div className="" style={{ float: "left" }}>
            33333333333333
          </div>
          <div className="" style={{ float: "left" }}>
            44444444444444
          </div>
        </div>
      </div>*/}
    </Base>
  );
}
