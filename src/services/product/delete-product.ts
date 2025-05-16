import request from "@tymex/libs/request";

const deleteProduct = async (id: number) => {
  const response = await request.delete(`/products/${id}`);
  return response.data;
};

export default deleteProduct;
