import request from "@tymex/libs/request";
import { GetProductsParams, IProduct } from "./types";

const getProducts = async (params?: GetProductsParams) => {
  const response = await request.get<IProduct[]>("/products", { params });
  return response.data;
};

export default getProducts;
