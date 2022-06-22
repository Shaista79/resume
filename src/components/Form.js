import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6efui79",
        "template_3hfq6ko",
        form.current,
        "LmeoBXnuYK4yKycAv"
      )
      .then(
        (result) => {
          alert("Form Submitted");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
        <h2 className="h3 text mb-3" style={{ color: "#154D52" }}>
          Contact
        </h2>
        <div className="row ">
          <div className="col-md-7 d-print-none">
            <div className="my-2">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-6">
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your E-mail"
                      required
                    />
                  </div>
                </div>
                <div className="form-group my-2">
                  <textarea
                    className="form-control"
                    style={{ resize: "none" }}
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-primary mt-2" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
