import React, { useState } from "react";
import "./Contact.css";
import Alert from "@material-ui/lab/Alert";
import { CircularProgress } from "@material-ui/core";
import $ from "jquery";
window.$ = $;

const Contact = () => {
  const [alertInfo, setAlertInfo] = useState({
    text: "",
    type: "",
  });
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbycqvUnh14Jlpyc2sidbV0AVWVWt21AGGOtEhh_jiN0oL04BdEYPUxRdTGqOGOEsYs/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        setInputs({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setLoading(false);
        setAlert(true);
        setAlertInfo({ text: "form submitted", type: "success" });
        setInterval(() => {
          setAlert(false);
          setAlertInfo({});
        }, 4000);
      },

      error: function (err) {
        setLoading(false);
        setAlert(true);
        setAlert({ text: "Something Error", type: "error" });
        setInterval(() => {
          setAlert(false);
          setAlertInfo({});
        }, 4000);
      },
    });
  };

  return (
    <div className="contact-main container">
      <div className="contact" id="contact">
        <div className="contact-container row">
          <div className="contact-content col-md-4">
            <img src="./logo/contact.png" alt="" />
          </div>
          <div className="contact-head col-md-4 col-12">
            <h1>Contact Us</h1>

            <div className="card">
              <div className="card-text">
                <h1>New Biz</h1>
                <p>oxeadsmedia@gmail.com</p>
                <p>+918289906276</p>
              </div>
              <div className="card-text">
                <h1>General</h1>
                <p>oxeadsmedia@gmail.com</p>
                <p>+919496102561</p>
              </div>
              <div className="card-text">
                <h1>Career</h1>
                <p>oxeadsmedia@gmail.com</p>
                <p>+918086053157</p>
              </div>
              <div className="drops">
                <div className="drop drop-1"></div>
                <div className="drop drop-2"></div>
                <div className="drop drop-3"></div>
                <div className="drop drop-4"></div>
                {/* <div class="drop drop-5"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        className="contact-form col-md-12 col-12 mt-5 pb-5"
        id="submit-form"
        action=""
        onSubmit={handleSubmit}
      >
        <h1>Message Us</h1>
        {loading ? (
          <CircularProgress />
        ) : alert ? (
          <Alert severity={alertInfo.type}>{alertInfo.text}</Alert>
        ) : (
          <div className="card card-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="name"
              required
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              id="phone"
              value={inputs.phone}
              onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
            />
            <textarea
              type="text"
              rows="6"
              placeholder="Messages"
              name="message"
              id="message"
              required
              value={inputs.message}
              onChange={(e) =>
                setInputs({ ...inputs, message: e.target.value })
              }
            ></textarea>
            <button type="submit" className="btn-2">
              <span>Send</span>
              <i className="fas fa-paper-plane"></i>
            </button>
            <div className="drops">
              <div className="drop drop-5"></div>
              <div className="drop drop-2"></div>
              <div className="drop drop-7"></div>
              <div className="drop drop-4"></div>
              <div className="drop drop-6"></div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
