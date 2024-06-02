import { Space, Table } from "antd";
import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import DashboardSearch from "./dashboardSearch";
import adminStore from "../../../Services/store/admin";
import { EyeOutlined, FileAddOutlined } from "@ant-design/icons";

export default function index() {
  const { treatmentSearchResult } = adminStore((state) => state);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "emailId",
      key: "emailId",
    },
    {
      title: "National Id",
      dataIndex: "nationalId",
      key: "nationalId",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "DOB",
      dataIndex: "DOB",
      key: "DOB",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            className="table-buttons"
            onClick={() =>
              navigate(`/admin/history/${record.registerId}`, {
                state: record,
              })
            }
          >
            <EyeOutlined />
            View History
          </a>
          <a
            className="table-buttons"
            onClick={() => navigate(`/admin/booking/${record.registerId}`)}
          >
            <FileAddOutlined />
            Create Booking
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div className="dashboard-wrap">
      <div className="button-container">
        <button onClick={() => navigate("/admin/register")}>
          Create New Booking
        </button>
      </div>
      <div className="dashboard-container">
        <h2>Search a Booking</h2>
        <DashboardSearch />
        <Table columns={columns} dataSource={treatmentSearchResult} />
      </div>
    </div>
  );
}
