import React, { useEffect, useState } from "react";
import CustomInput from "../../../Components/CustomInput";
import { SearchOutlined } from "@ant-design/icons";
import adminStore from "../../../Services/store/admin";

export default function DashboardSearch() {
  const { searchTreatments } = adminStore((state) => state);
  const [formData, setFormData] = useState({
    name: "",
    nationalId: "",
    passportNo: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    if (e) e.preventDefault();
    searchTreatments(formData);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="dashboard-search">
        <div>
          <CustomInput
            placeHolder="Name"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          <CustomInput
            placeHolder="Passport Number"
            onChange={handleChange}
            name="passportNo"
            value={formData.passportNo}
          />
          <CustomInput
            placeHolder="National Id"
            onChange={handleChange}
            name="nationalId"
            value={formData.nationalId}
          />
          <CustomInput
            placeHolder="Phone Number"
            onChange={handleChange}
            name="phoneNumber"
            value={formData.phoneNumber}
          />
        </div>
        <button type="submit">
          <SearchOutlined />
          Search
        </button>
      </form>
    </div>
  );
}
