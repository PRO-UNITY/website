import axios from "axios";
import { BASE_URL } from "../Utils/BaseUrl";

export const ProductsPrice = async (data) => {
  const response = await axios.post(`${BASE_URL}payment`, data);
  return response.data;
};
export const PaymentSuccesUser = async (data) => {
  const response = await axios.post(`${BASE_URL}payment_successful`, data);
  return response.data;
};
