interface FormCreateUser {
  email: string;
  password: string;
  birthday: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

interface ApiError {
  message: string;
  status?: number;
  data?: any;
}
