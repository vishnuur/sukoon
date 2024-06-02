import React, { useEffect, useState } from "react";
import "./index.scss";
import CustomInput from "../../../Components/CustomInput";
import CustomDropDown from "../../../Components/CustomDropDown";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import adminStore from "../../../Services/store/admin";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function index() {
  const { registerUser, registeredUserId, setRegisterId } = adminStore(
    (state) => state
  );
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    nationalId: "",
    phoneNumber: "",
    emailId: "",
    status: "A",
    gender: "",
    passportNo: "",
    DOB: new Date().toISOString(),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    const {
      name,
      password,
      phoneNumber,
      emailId,
      gender,
      DOB,
      nationalId,
      passportNo,
    } = formData;

    if (!name || !password || !phoneNumber || !emailId || !gender || !DOB) {
      return false;
    }

    if (!nationalId && !passportNo) {
      return false;
    }

    return true;
  };

  const onChangeDate = (date, dateString) => {
    setFormData({
      ...formData,
      DOB: new Date(dateString).toISOString(),
    });
  };

  const onSubmit = async () => {
    await registerUser(formData);
  };
  useEffect(() => {
    if (registeredUserId) {
      navigate(`/admin/booking/${registeredUserId}`);
    }
    return () => {
      setRegisterId("");
      setFormData({
        name: "",
        password: "",
        nationalId: "",
        phoneNumber: "",
        emailId: "",
        status: "A",
        gender: "",
        passportNo: "",
        DOB: new Date().toISOString(),
      });
    };
  }, [registeredUserId]);

  return (
    <div className="register-wrap">
      <div className="register-container">
        <span className="arrow-back" onClick={() => navigate(-1)}>
          <ArrowLeftOutlined />
          <h2>Register New User</h2>
        </span>
        <CustomInput
          placeHolder="Name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          extraStyle={"inputStyle"}
        />
        <CustomInput
          placeHolder="Password"
          value={formData.password}
          onChange={handleChange}
          type="text"
          name="password"
          extraStyle={"inputStyle"}
        />
        <CustomInput
          placeHolder="National Id"
          value={formData.nationalId}
          onChange={handleChange}
          type="text"
          name="nationalId"
          extraStyle={"inputStyle"}
        />
        <CustomInput
          placeHolder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          type="tel"
          name="phoneNumber"
          extraStyle={"inputStyle"}
        />
        <CustomInput
          placeHolder="Email"
          value={formData.emailId}
          onChange={handleChange}
          type="email"
          name="emailId"
          extraStyle={"inputStyle"}
        />
        <CustomDropDown
          options={[
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ]}
          placeHolder="Gender"
          onChange={handleChange}
          name="gender"
          value={formData?.gender}
        />

        <CustomInput
          placeHolder="Passport No"
          value={formData.passportNo}
          onChange={handleChange}
          type="text"
          name="passportNo"
          extraStyle={"inputStyle"}
        />
        <DatePicker
          onChange={onChangeDate}
          name="DOB"
          style={{ width: "380px", marginBottom: "8px" }}
          format="YYYY-MM-DD"
          inputReadOnly
          placeholder="Date Of Birth"
        />

        <button onClick={() => onSubmit()} disabled={!isFormValid()}>
          Submit
        </button>
      </div>
    </div>
  );
}
