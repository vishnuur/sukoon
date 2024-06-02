import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./css/icomoon.css";
import "./css/animate.css";
import "./css/open-iconic-bootstrap.min.css";
import "./css/aos.css";
import "./css/ionicons.min.css";
import "./css/bootstrap-datepicker.css";
import "./css/jquery.timepicker.css";
import "./css/flaticon.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
