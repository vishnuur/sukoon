import React from "react";
import { PieChartOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;
import logoImage from "../../assets/images/logo_sukoon.png";
import "./index.scss";
import adminStore from "../../Services/store/admin";
import Loader from "../../Components/Loader";

const item1 = [{ key: "1", icon: <PieChartOutlined />, label: "Dashboard" }];
const AdminLayout = () => {
  const { setUserToken, isLoading } = adminStore((state) => state);
  const navigate = useNavigate();
  const onLogout = () => {
    setUserToken(null);
    localStorage.setItem("userToken", "");
    navigate("/admin/login");
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/admin/dashboard">
          <img src={logoImage} className="logo img-fluid" />
        </Link>
        <a onClick={() => onLogout()}>
          <Avatar
            style={{ backgroundColor: "#0066cc", verticalAlign: "middle" }}
            size="large"
          >
            Logout
          </Avatar>
        </a>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: "solid 2px grey",
            }}
            items={item1}
            className="sider-wrap"
          />
        </Sider>
        <Layout className="layout-wrap">
          {isLoading && <Loader />}
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
