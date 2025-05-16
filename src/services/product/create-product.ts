import request from "@tymex/libs/request";
import { IProduct } from "./types";

const createProduct = async (
  product: Omit<IProduct, "id" | "createdAt" | "updatedAt">
) => {
  const response = await request.post<IProduct>("/products", product);
  return response.data;
};

export default createProduct;
