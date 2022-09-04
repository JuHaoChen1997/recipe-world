//code from https://www.emailjs.com/docs/examples/reactjs/

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

const Mailer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${YOUR_SERVICE_ID}`,
        `${YOUR_TEMPLATE_ID}`,
        form.current,
        `${YOUR_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <div>
        <label>Name: </label>
        <input type="text" name="user_name" />
      </div>
      <br />
      <div>
        <label>Email: </label>
        <input type="email" name="user_email" />
      </div>
      <br />
      <div>
        <label>Message: </label>
        <textarea name="message" />
      </div>
      <br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Mailer;
