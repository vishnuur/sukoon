import React, { useEffect, useState } from "react";
import "./index.scss";
import CustomInput from "../../../Components/CustomInput";
import CustomDropDown from "../../../Components/CustomDropDown";
import { Checkbox, DatePicker } from "antd";
import dayjs from "dayjs";
import adminStore from "../../../Services/store/admin";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";

const userId = localStorage.getItem("userId");
export default function index() {
  const { treatmentBooking } = adminStore((state) => state);
  const navigate = useNavigate();
  const { registerId } = useParams();

  const [formData, setFormData] = useState({
    registerid: registerId,
    date: new Date().toISOString(),
    time: "",
    userid: userId,
    cancelflag: "N",
    canceldesc: "A",
    amount: "",
    description: "",
    acupuncture: "N",
    hijama: "N",
    steambath: "N",
    detoxification: "N",
    reflexology: "N",
    bornalignment: "N",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData, "formdata");

  const isFormValid = () => {
    const {
      date,
      time,
      amount,
      acupuncture,
      hijama,
      steambath,
      detoxification,
      reflexology,
      bornalignment,
    } = formData;

    if (!date || !time || !amount) {
      return false;
    }
    if (
      acupuncture !== "Y" &&
      hijama !== "Y" &&
      steambath !== "Y" &&
      detoxification !== "Y" &&
      reflexology !== "Y" &&
      bornalignment !== "Y"
    ) {
      return false;
    }

    return true;
  };

  const handleChangeCheckbox = (checkedValues) => {
    const updatedFormData = { ...formData };

    options.forEach((option) => {
      updatedFormData[option.value] = "N";
    });

    checkedValues.forEach((value) => {
      updatedFormData[value] = "Y";
    });

    setFormData(updatedFormData);
  };

  const onChangeDate = (date, dateString) => {
    setFormData({
      ...formData,
      date: new Date(dateString).toISOString(),
    });
  };

  function generateTimeOptions() {
    const times = [];
    let start = new Date("1970-01-01T07:00:00");
    const end = new Date("1970-01-01T20:30:00");

    while (start <= end) {
      const hours = start.getHours();
      const minutes = start.getMinutes();
      const formattedTime = `${hours % 12 === 0 ? 12 : hours % 12}:${
        minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes
      }${hours < 12 ? " AM" : " PM"}`;
      times.push({ value: formattedTime, label: formattedTime });
      start.setMinutes(start.getMinutes() + 30);
    }

    return times;
  }

  const timeOptions = generateTimeOptions();

  const onSubmit = () => {
    treatmentBooking(formData);
    navigate("/admin/dashboard");
  };

  useEffect(() => {
    return () => {
      setFormData({
        registerid: registerId,
        date: new Date().toISOString(),
        time: "",
        userid: userId,
        cancelflag: "N",
        canceldesc: "A",
        amount: "",
        description: "",
        acupuncture: "N",
        hijama: "N",
        steambath: "N",
        detoxification: "N",
        reflexology: "N",
        bornalignment: "N",
      });
    };
  }, []);

  const options = [
    { label: "Acupuncture", value: "acupuncture" },
    { label: "Steam Bath", value: "steambath" },
    { label: "Hijama", value: "hijama" },
    { label: "Detoxification", value: "detoxification" },
    { label: "Reflexology", value: "reflexology" },
    { label: "Born Alignment", value: "bornalignment" },
  ];

  const disabledDate = (current) => {
    // Can not select days before today
    return current && current < dayjs().startOf("day");
  };

  return (
    <div className="register-wrap">
      <div className="register-container">
        <span className="arrow-back" onClick={() => navigate(-1)}>
          <ArrowLeftOutlined />
          <h2>Book An Appointment</h2>
        </span>
        <div className="checkbox-wrap">
          <Checkbox.Group options={options} onChange={handleChangeCheckbox} />
        </div>
        <DatePicker
          onChange={onChangeDate}
          name="Date"
          style={{ width: "380px", marginBottom: "8px" }}
          format="YYYY-MM-DD"
          inputReadOnly
          disabledDate={disabledDate}
          placeholder="Select Booking Date"
        />
        <CustomDropDown
          options={timeOptions}
          placeHolder="Time"
          onChange={handleChange}
          name="time"
          value={formData?.time}
        />
        <CustomInput
          placeHolder="Amount"
          value={formData.amount}
          onChange={handleChange}
          type="text"
          name="amount"
          extraStyle={"inputStyle"}
        />
        <CustomInput
          placeHolder="Description"
          value={formData.description}
          onChange={handleChange}
          type="text"
          name="description"
          extraStyle={"inputStyle"}
          largeInput
          lines={5}
        />

        <button onClick={() => onSubmit()} disabled={!isFormValid()}>
          Submit
        </button>
      </div>
    </div>
  );
}
