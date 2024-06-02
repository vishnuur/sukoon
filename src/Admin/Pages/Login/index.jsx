import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo_sukoon.png";
import CustomInput from "../../../Components/CustomInput";
import adminStore from "../../../Services/store/admin";

export default function AdminLogin() {
  const { loginSuccess, onLogingIn, setLoginSuccess } = adminStore(
    (state) => state
  );
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onSubmit = async () => {
    await onLogingIn(formData);
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate("/admin/dashboard");
    }
    return () => {
      setLoginSuccess(false);
    };
  }, [loginSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="admin-login">
      <div className="login-wrap">
        <div className="login-form">
          <img
            className="bg-image"
            src="https://images.pexels.com/photos/6076104/pexels-photo-6076104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="login-fields">
            <img src={Logo} />
            <h3>Login</h3>
            <CustomInput
              value={formData.username}
              placeHolder="User name"
              type="text"
              onChange={handleChange}
              name="username"
            />
            <CustomInput
              value={formData.password}
              placeHolder="Password"
              type="password"
              onChange={handleChange}
              name="password"
            />
            <button onClick={onSubmit} className="login-button">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
