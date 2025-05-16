import request from "@tymex/libs/request";
import { IProduct } from "./types";

const getProductById = async (id: number) => {
  const response = await request.get<IProduct>(`/products/${id}`);
  return response.data;
};

export default getProductById;
