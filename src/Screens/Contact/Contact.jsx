import { ArrowDown, Mail, MapPin, Pencil, PhoneCall, User } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_eo3kbio",
      "template_lhe67qb",
      formRef.current,
      "-iLFEKCu_fxmpkQbZ"
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        setStatus("✅ Message sent successfully!");
        form.current.reset(); // Clear the form
      },
      (error) => {
        console.log("Email error:", error.text);
        setStatus("❌ Failed to send. Try again.");
      }
    );
  };

  return (
    <div className="pb-10 pt-15 px-4 max-w-full">
      <div className="text-green-700">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 ">
          Conatct Us
        </h1>
        <ArrowDown className="mx-auto mt-4 w-[28px] h-auto" />
      </div>
      <div className="wrapper flex flex-col md:flex-row md:items-center gap-8 text-green-900 max-w-[69rem]  ">
        <div className={`${style.left} w-full md:w-[40%]`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Have Questions? <br /> Get in Touch
          </h1>
          <div className="space-y-4">
            <div className="flex gap-4 mt-10 items-start">
              <div className="p-2 bg-green-200 rounded-md">
                <MapPin size={20} />
              </div>
              <p>
                <span className="location">Climcocoa Project Office.</span>
                <span className="location">
                  Department of Geography and Resource Developement.
                </span>
                {/* <span className='location'>P. O. Box LG59</span> */}
                <span className="location">UG, Legon Accra</span>
              </p>
            </div>
            <div className="flex gap-4 items-center ">
              <div className="p-2 bg-green-200 rounded-md">
                <Mail size={20} />
              </div>
              <p className="text-sm">climcocoae@ug.edu.gh</p>
            </div>
            <div className="flex gap-4 items-center ">
              <div className="p-2 bg-green-200 rounded-md">
                <PhoneCall size={20} />
              </div>
              <p className="text-sm">+233 279943213</p>
            </div>
          </div>
        </div>

        <div className={`${style.right} w-full md:w-2/3  p-8 `}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
              <div className="input-field">
                <div className="w-6 h-6 mx-2 ">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input-style"
                />
              </div>
              <div className="input-field">
                <div className="w-6 h-6 mx-2 ">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input-style"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
              <div className="input-field">
                <div className="w-6 h-6 mx-2 ">
                  <PhoneCall size={18} />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone"
                  required
                  className="input-style"
                />
              </div>
              <div className="input-field">
                <div className="w-4 "></div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="input-style"
                />
              </div>
            </div>
            <div className="textarea-field">
              <div className="w-6 h-6 mx-2">
                <Pencil size={18} />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="textarea"
              />
            </div>
            {status && <p className="text-center mt-4">{status}</p>}
            <button
              type="submit"
              className="w-full md:w-auto bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-3 px-8 cursor-pointer rounded-lg"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
