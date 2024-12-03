"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9634241587",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "singhritu241101@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Bangalore, karnatka  ",
  },
];

import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const textareaRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handlefirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handlelastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlephNumber = (e) => {
    setPhNumber(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && phNumber != "") {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhNumber("");
      textareaRef.current.value = "";

      emailjs
        .sendForm("service_46ofpsl", "template_1f6ugrp", form.current, {
          publicKey: "D-p2Hv1qgr3DzdjiM",
        })
        .then(
          (result) => {
            console.log("SUCCESS!");
            console.log("Message is sent", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else console.log("no entries");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">
                Lets&apos;s Work together
              </h3>
              <p className="text-white/60">
                Need a skilled frontend developer? I specialize in crafting
                stunning, user-friendly websites. Let&apos;s connect and build
                something amazing together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={handlefirstName}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="LastName"
                  value={lastName}
                  onChange={handlelastName}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                />
                <Input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone"
                  value={phNumber}
                  onChange={handlephNumber}
                />
              </div>

              <Textarea
                className="h-[200px] "
                name="message"
                ref={textareaRef}
                placeholder="Type your message here"
              />
              <Button
                type="submit"
                value="send"
                className="max-w-40"
                size="md"
                onClick={handleButtonClick}
              >
                Send Message
              </Button>
            </form>
          </div>

          {showPopup && (
            <div className="popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
              <div className="bg-white p-4 rounded shadow-lg text-center">
                <h2 className="text-xl font-bold text-accent">Success!</h2>
                <p className="text-black">
                  Your message has been sent successfully!
                </p>
              </div>
            </div>
          )}

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:orer-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title} </p>
                      <h3 className="text-xl">{item.description} </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
