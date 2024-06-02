import { DatePicker, Modal } from "antd";
import React from "react";

export default function AppointmentModal({
  isVisible,
  setVisible,
  closeModal,
}) {
  return (
    <Modal
      title="Make an appointment"
      open={isVisible}
      onOk={setVisible}
      onCancel={closeModal}
      footer={null}
    >
      <div>
        <div className="modal-body">
          <form action="#">
            <div className="form-group">
              <div className="select-wrap">
                <div className="icon">
                  <span className="ion-ios-arrow-down"></span>
                </div>
                <select name="" id="" className="form-control select-list">
                  <option value="">Department</option>
                  <option value="">Teeth Whitening</option>
                  <option value="">Teeth CLeaning</option>
                  <option value="">Quality Brackets</option>
                  <option value="">Modern Anesthetic</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="appointment_NationalId"
                placeholder="National Id"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="appointment_name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="appointment_email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="appointment_MobileNo"
                placeholder="Mobile No"
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <div className="form-control">
                    <DatePicker
                      variant="borderless"
                      onChange={() => console.log("first")}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="select-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down"></span>
                    </div>
                    <select name="" id="" className="form-control select-list">
                      <option value="">Time Slot</option>
                      <option value="">07:00AM to 08:00AM</option>
                      <option value="">08:00AM to 09:00AM</option>
                      <option value="">09:00AM to 10:00AM</option>
                      <option value="">10:00AM to 11:00AM</option>
                      <option value="">11:00AM to 12:00AM</option>
                      <option value="">12:00PM to 01:00PM</option>
                      <option value="">02:00PM to 03:00PM</option>
                      <option value="">03:00PM to 04:00PM</option>{" "}
                      <option value="">04:00PM to 05:00PM</option>
                      <option value="">05:00PM to 06:00PM</option>
                      <option value="">06:00PM to 07:00PM</option>
                      <option value="">07:00PM to 08:00PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name=""
                id="appointment_message"
                className="form-control"
                cols="10"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Make an Appointment"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
