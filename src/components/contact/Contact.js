import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55o3qc9",
        "template_jhyhvf7",
        form.current,
        "user_EWqVcltUBXmpxik40Mc7o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact">
      <h1 data-aos="zoom-in">Contact Me</h1>

      <div className="contact-items">
        <div className="contact-info text-start ">
          <div className="d-flex align-items-center py-3">
            <i className="fa fa-envelope" aria-hidden="true" />{" "}
            omarbinasad0@gmail.com
          </div>

          <div className="d-flex align-items-center">
            <i className="fa fa-phone" aria-hidden="true" /> 01636449575
          </div>
        </div>
        <div class="wrapper ">
          <form ref={form} onSubmit={sendEmail}>
            <div class="form-group">
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Type your message here...."
              ></textarea>
            </div>
            <div class="form-group">
              <input className="submit-btn" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
