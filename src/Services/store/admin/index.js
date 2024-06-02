import { create } from "zustand";
import { customToast } from "../../../Components/toast";
import {
  adminLogin,
  searchBookings,
  userRegister,
  userTreatmentBooking,
  viewHistory,
} from "../../apis/admin";
import { ERROR, SUCCESS } from "../../../config/app.const";

const adminStore = create()((set) => ({
  loginSuccess: false,
  signUpSuccess: false,
  userToken: "",
  userId: "",
  isProfileCreated: false,
  isLoading: false,
  registeredUserId: "",
  treatmentSearchResult: [],
  treatmentHistory: [],
  onLogingIn: async (state) => {
    set({ isLoading: true });
    const result = await adminLogin(state);
    if (!result.status) {
      set({ loginSuccess: false });
      customToast(ERROR, result.result);
    } else {
      set({ userToken: result?.auth_token });
      localStorage.setItem("userToken", result?.auth_token);
      localStorage.setItem("userId", result?.data[0]?.userId);
      set({ loginSuccess: true });
      set({ userId: result?.data[0]?.userId });
      customToast(SUCCESS, "Login Success");
    }
    set({ isLoading: false });
  },
  setLoginSuccess: (state) => {
    set({ loginSuccess: state });
  },
  setUserToken: (payload) => {
    set({ userToken: payload });
  },

  registerUser: async (payload) => {
    set({ isLoading: true });
    const result = await userRegister(payload);
    if (result.status) {
      set({ registeredUserId: result.registerId });
      customToast(SUCCESS, result.result);
    } else {
      customToast(ERROR, "Some error occured");
      set({ registeredUserId: "" });
    }
    set({ isLoading: false });
  },
  setRegisterId: (payload) => {
    set({ registeredUserId: payload });
  },

  treatmentBooking: async (payload) => {
    set({ isLoading: true });
    const result = await userTreatmentBooking(payload);
    if (result.status) {
      customToast(SUCCESS, result.result);
    } else {
      customToast(ERROR, "Some error occured");
    }
    set({ isLoading: false });
  },

  searchTreatments: async (payload) => {
    const result = await searchBookings(payload);
    set({ treatmentSearchResult: result.result });
  },

  viewTreatmentHistory: async (payload) => {
    const result = await viewHistory(payload);
    set({ treatmentHistory: result.result });
  },
}));

export default adminStore;
