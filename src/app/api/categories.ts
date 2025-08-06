import { TypeCategory } from "@/constant/types";
import { sendDelete, sendGet, sendPatch, sendPost } from "@/lib/axios";

export const categoriesService = {
  getCategories: async () => {
    const response = await sendGet("categories", {});
    return response;
  },
  createCategory: async (data: TypeCategory) => {
    const response = await sendPost("categories", data);
    return response;
  },
  getCategoryById: async (id: string) => {
    const response = await sendGet(`categories/${id}`, {}); 
    return response;
  },
  updateCategory: async (id: string, data: TypeCategory) => {
    const response = await sendPatch(`categories/${id}`, data);
    return response;
  },
  deleteCategory: async (id: string) => {
    const response = await sendDelete(`categories/${id}`);
    return response;
  },
};
