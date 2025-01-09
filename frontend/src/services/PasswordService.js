import axios from "axios";

const api = axios.create({
  baseURL: "http://13.49.225.86:8080/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

class PasswordService {
  static async sendResetCode(email) {
    if (!email) {
      throw "Email is required.";
    }
    try {
      const response = await api.post("/forgot-password", { email });
      return response.data.message;
    } catch (error) {
      throw error.response ? error.response.data : { message: "Network Error" };
    }
  }

  static async resetPassword(email, code, newPassword) {
    if (!email || !code || !newPassword) {
      throw "Email, verification code, and new password are required.";
    }
    try {
      const response = await api.post("/reset-password", { email, code, newPassword });
      return response.data.message;
    } catch (error) {
      throw error.response ? error.response.data : { message: "Network Error" };
    }
  }
}

export default PasswordService;
