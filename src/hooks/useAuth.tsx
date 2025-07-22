import { ROUTERS } from "@/constant/routers";
import { TypeUser } from "@/constant/types";
import LocalStorageUtil, { LOCAL_KEY } from "@/utils/LocalStorageUtil";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    if (typeof window !== "undefined") {
      LocalStorageUtil.removeItem(LOCAL_KEY.USER);
    }
    router.push(ROUTERS.LOGIN);
  };

  const isAuthenticated = (): boolean => {
    if (typeof window === "undefined") return false;
    const token = getCookie('accessToken');
    return !!token;
  };

  const getCurrentUser = (): TypeUser | null => {
    if (typeof window === "undefined") return null;
    const user = LocalStorageUtil.getItemObject(LOCAL_KEY.USER);
    return Object.keys(user).length > 0 ? user : null;
  };

  return {
    handleLogout,
    isAuthenticated,
    getCurrentUser,
  };
};
