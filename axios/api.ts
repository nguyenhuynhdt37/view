import axiosInstance from "./axiosInstance";

export const checkEmailAsync = async (email: string) => {
  try {
    const res = await axiosInstance.get("/auth/check_email", {
      params: {
        email,
      },
    });

    return res.data;
  } catch (error: any) {
    console.log("res", error);
    return error?.response?.data;
  }
};
