import { post } from "../../httpMethods";

export const adminLogin = async (payload) => {
  try {
    const result = await post("sukoon/login", payload);
    return result;
  } catch (er) {
    return er;
  }
};

export const userRegister = async (payload) => {
  try {
    const result = await post("profile/register", payload);
    return result;
  } catch (er) {
    return er;
  }
};

export const userTreatmentBooking = async (payload) => {
  try {
    const result = await post("profile/treatmentbooking", payload);
    return result;
  } catch (er) {
    return er;
  }
};

export const searchBookings = async (payload) => {
  try {
    const result = await post("search/searchRegisters", payload);
    return result;
  } catch (er) {
    return er;
  }
};

export const viewHistory = async (payload) => {
  try {
    const result = await post("search/treatmenthistory", payload);
    return result;
  } catch (er) {
    return er;
  }
};
