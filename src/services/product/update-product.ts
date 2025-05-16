import request from "@tymex/libs/request";
import { IProduct } from "./types";

const updateProduct = async (id: number, product: Partial<IProduct>) => {
  const response = await request.put<IProduct>(`/products/${id}`, product);
  return response.data;
};

export default updateProduct;
