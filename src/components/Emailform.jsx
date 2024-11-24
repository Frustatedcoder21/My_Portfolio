import React, { useState } from "react";
import { useRef } from "react";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
const Emailform = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_5ifywo6", "template_oqqdfgm", form.current, {
        publicKey: "-6JDtczxZYygz2EmL",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          setEmailSent(true);
          setTimeout(() => {
            setEmailSent(false);
          }, 3000);
          name.current.value = "";
          email.current.value = "";
          message.current.value = "";
        },
        (error) => {
          console.log("Failed", error.text);
        }
      );
  };
  return (
    <div
      className="bg-red-black w-screen h-screen gap-0 flex flex-col justify-around sm:justify-center items-center  relative  sm:gap-2"
      id="contact"
    >
      <p className="text-red-600 text-center font-bebasNeue absolute top-6 text-3xl sm:text-5xl m-5 mb-6 ">
        You Can Say Hello !
      </p>
      

      <div className="w-[60vw] h-[40vh] sm:h-[30vh] sm:w-[60vw] md:w-[40vw]  flex justify-center items-center border-red-600 blur-sm rounded-md bg-red-600 "></div>
      <div className="w-[60vw] h-[40vh] sm:h-[30vh] sm:w-[60vw] md:w-[40vw]  flex justify-center items-center border-red-600 border-2 p-2 rounded-md absolute overflow-hidden">
        <form
          ref={form}
          className="text-red-600 flex flex-col items-center  gap-4 w-[80%]"
          onSubmit={sendEmail}
        >
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            name="user_name"
            id="name"
            ref={name}
            placeholder="Name"
            className="border-red-600 border-2 bg-red-black rounded-md pl-4 h-8  w-[80%]"
          />
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            name="user_email"
            id="email"
            ref={email}
            placeholder="Email"
            className="border-red-600 border-2 bg-red-black rounded-md pl-4 h-8 transparent w-[80%]"
          />
          {/* <label htmlFor="password">Password</label> */}

          <input
            type="text"
            name="message"
            id="message"
            ref={message}
            placeholder="message"
            className="border-red-600 border-2 bg-red-black rounded-md pl-4 h-8 transparent w-[80%]"
          />
          {emailSent && (
            <div className="text-green-600 text-xs rounded-md ">Email Sent</div>
          )}
          <input
            type="submit"
            value="Send"
            className="border-red-600 border-2 bg-black rounded-md text-red  h-8 transparent w-28 "
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Emailform;
