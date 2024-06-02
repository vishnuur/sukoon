import React, { useEffect } from "react";
import "./index.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import adminStore from "../../../Services/store/admin";
import { Table } from "antd";
import moment from "moment";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function index() {
  const { viewTreatmentHistory, treatmentHistory } = adminStore(
    (state) => state
  );
  const { registerId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const bookingValidation = (value) => {
    if (value?.toLowerCase() === "y") {
      return "Yes";
    } else {
      return "No";
    }
  };
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{text && moment(text).format("DD-MM-YYYY")}</a>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Acupuncture",
      dataIndex: "acupuncture",
      key: "acupuncture",
      render: (text) => <a>{bookingValidation(text)}</a>,
    },
    {
      title: "Hijama",
      dataIndex: "hijama",
      key: "hijama",
      render: (text) => <a>{bookingValidation(text)}</a>,
    },
    {
      title: "Steam Bath",
      dataIndex: "steambath",
      key: "steambath",
      render: (text) => <a>{bookingValidation(text)}</a>,
    },
    {
      title: "Detoxification",
      dataIndex: "detoxification",
      key: "detoxification",
      render: (text) => <a>{bookingValidation(text)}</a>,
    },
    {
      title: "Reflexology",
      dataIndex: "reflexology",
      key: "reflexology",
      render: (text) => <a>{bookingValidation(text)}</a>,
    },
    {
      title: "Born Alignment",
      dataIndex: "bornalignment",
      key: "bornalignment",
      render: (text) => <a>{bookingValidation(text)}</a>,
    },
  ];

  useEffect(() => {
    const payload = {
      registerId: 1,
      limitBy: 15,
      page: 1,
    };
    viewTreatmentHistory(payload);
  }, [registerId]);
  console.log(state, "state");
  return (
    <div className="view-history-container">
      <div className="history-wrap">
        <div className="user-details" onClick={() => navigate(-1)}>
          <ArrowLeftOutlined />
          <p>{state.name}</p>
        </div>
        <div className="create-new-record">
          <button
            onClick={() => navigate(`/admin/booking/${state.registerId}`)}
          >
            New Booking
          </button>
        </div>
        <div className="user-details-content">
          <span>
            <h6>Email Id :</h6>
            <p>{state.emailId}</p>
          </span>
          <span>
            <h6>Gender :</h6>
            <p>{state.gender}</p>
          </span>
          <span>
            <h6>National Id :</h6>
            <p>{state.nationalId}</p>
          </span>
          <span>
            <h6>Passport Number :</h6>
            <p>{state.passportNo}</p>
          </span>
          <span>
            <h6>Phone Number :</h6>
            <p>{state.phoneNumber}</p>
          </span>
          {state?.DOB && (
            <span>
              <h6>DOB :</h6>
              <p>{moment(state.DOB).format("DD-MM-YYYY")}</p>
            </span>
          )}
          {state.crDate && (
            <span>
              <h6>Account created date :</h6>
              <p>{moment(state.crDate).format("DD-MM-YYYY")}</p>
            </span>
          )}
        </div>
        <Table columns={columns} dataSource={treatmentHistory} />
      </div>
    </div>
  );
}
