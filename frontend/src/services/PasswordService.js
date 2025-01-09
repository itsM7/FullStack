import axios from "axios";

const api = axios.create({
  //baseURL: "http://ade753b60e37f44259bb06edb9fd3092-381420277.eu-west-1.elb.amazonaws.com/api",
  baseURL: "http://localhost:8080/api/auth",
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
      throw error;
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
      throw error;
    }
  }
}

export default PasswordService;