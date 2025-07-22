import { sendPost } from "@/lib/axios";

export const authService = {
  login: async (email: string, password: string) => {
    const response = await sendPost('auth/login', { email, password });
    return response;
  },
};
