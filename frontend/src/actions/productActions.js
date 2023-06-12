import axios from 'axios'

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,

    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,

    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,

    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,

    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,

    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,

    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,

    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,

    CLEAR_ERRORS,
} from "../constants/productConstants";
const api = "https://art-vista.vercel.app";

// Get All Products
export const getProduct = (keyword = "", currentPage = 1, price = [0, 25000], category, ratings=0) => async (dispatch) => {
   
  try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      
      if(category)
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      
      const { data } = await axios.get(api+link);
      // console.log(data);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
        
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//get product details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    let link = "/api/v1/product/";
    const { data } = await axios.get(api+link+id);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing all errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

// Create a new review
export const newReview = (reviewData) => async (dispatch) => {
  
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });
    const config = { method: "PUT", headers: { "Content-Type": "application/json"}, withCredentials: 'true', credentials: 'include'};
    const { data } = await axios.put(api + "/api/v1/review", reviewData, config);
    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });
    const config = { method: "GET", headers: { "Content-Type": "application/json"}, withCredentials: 'true', credentials: 'include'};
    const { data } = await axios.get(api + "/api/v1/admin/products", config);

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createProduct = (productData) => async (dispatch) => {
  
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });
    const config = { method: "POST", headers: { "Content-Type": "application/json"}, withCredentials: 'true', credentials: 'include'};
    const { data } = await axios.post(api + "/api/v1/admin/product/new", productData, config);
    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const config = { method: "DELETE", headers: { "Content-Type": "application/json"}, withCredentials: 'true', credentials: 'include'};
    const { data } = await axios.delete(api + `/api/v1/admin/product/${id}`, config);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    const config = { method: "PUT", headers: { "Content-Type": "application/json"}, withCredentials: 'true', credentials: 'include'};
    const { data } = await axios.put(api + `/api/v1/admin/product/${id}`,productData,config);

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });
    const config = { method: "GET", headers: { "Content-Type": "application/json"}, withCredentials: 'true', credentials: 'include'};
    const { data } = await axios.get(api + `/api/v1/reviews?id=${id}`, config);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });
    const config = { method: "DELETE", headers: { "Content-Type": "application/json"}, withCredentials: 'true', credentials: 'include'};
    const { data } = await axios.delete(api + `/api/v1/reviews?id=${reviewId}&productId=${productId}`, config);

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};