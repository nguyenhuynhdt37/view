import axiosInstance from "./axiosInstance";

export const checkEmailAsync = async (
  email: string
): Promise<ApiResponse<any> | ApiError> => {
  try {
    const res = await axiosInstance.get<ApiResponse<any>>("/auth/check_email", {
      params: {
        email,
      },
    });

    return res.data;
  } catch (error: any) {
    // Xử lý lỗi và trả về thông báo lỗi cụ thể
    if (error.response) {
      return {
        message: error.response.data.detail || "An error occurred",
        status: error.response.status || 500,
        data: error.response.data,
      };
    } else {
      return {
        message: error.message || "An error occurred",
      };
    }
  }
};
export const createUser = async ({
  email,
  password,
  birthday,
}: FormCreateUser): Promise<ApiResponse<any> | ApiError> => {
  try {
    const res = await axiosInstance.post<ApiResponse<any>>(
      "/auth/create_user",
      {
        email,
        password,
        birthday,
      }
    );

    return res.data; // Trả về dữ liệu từ response
  } catch (error: any) {
    // Xử lý lỗi và trả về thông báo lỗi cụ thể
    if (error.response) {
      return {
        message: error.response.data.detail || "An error occurred",
        status: error.response.status,
        data: error.response.data,
      };
    } else {
      return {
        message: error.message || "An error occurred",
      };
    }
  }
};

export const refresh_otp = async ({
  email,
}: {
  email: string;
}): Promise<ApiResponse<any> | ApiError> => {
  try {
    const res = await axiosInstance.post<ApiResponse<any>>(
      "/auth/refresh_otp",
      {},
      {
        params: {
          email,
        },
      }
    );

    return res.data; // Trả về dữ liệu từ response
  } catch (error: any) {
    // Xử lý lỗi và trả về thông báo lỗi cụ thể
    if (error.response) {
      return {
        message: error.response.data.detail || "An error occurred",
        status: error.response.status,
        data: error.response.data,
      };
    } else {
      return {
        message: error.message || "An error occurred",
      };
    }
  }
};
export const auth_otp_async = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}): Promise<ApiResponse<any> | ApiError> => {
  try {
    const res = await axiosInstance.post<ApiResponse<any>>(
      "/auth/authentication_otp",
      {
        email: email,
        otp: otp,
      }
    );

    return res.data; // Trả về dữ liệu từ response
  } catch (error: any) {
    // Xử lý lỗi và trả về thông báo lỗi cụ thể
    if (error.response) {
      return {
        message: error.response.data.detail || "An error occurred",
        status: error.response.status,
        data: error.response.data,
      };
    } else {
      return {
        message: error.message || "An error occurred",
      };
    }
  }
};
