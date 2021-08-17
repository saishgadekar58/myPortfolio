import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";

export default function Contact() {
  var contactName = "saish gadekar";
  var street = "plot no 6-a, Rajiv nagar";
  var city = "nagpur";
  var state = "maharashtra";
  var zip = "440010";
  var phone = "9067194769";
  var contactEmail = "saish.gadekar.58@gmail.com";
  var contactMessage =
    "Like my work ? Think im a good fit for your Team.Get in touch with me through my social or by filling the form below";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p5b680g",
        "template_zg3gg1z",
        e.target,
        "user_WHmxps1AvFD9CzCI8rQIn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Thank you for reaching out,i will get back to you soon ");
  };
  return (
    <div className="page">
      <div id="contact">
        <div className="contactDiv">
          <div className="imgDiv">
            <HiOutlineMail className="emailLogo" />
          </div>
          <div className="textDiv">
            <p>{contactMessage}</p>
          </div>
        </div>
        <div className="formDiv">
          <form onSubmit={submitForm}>
            <div>
              <label htmlFor="contactName">Name:</label>
              <input
                type="text"
                id="contactName"
                value={name}
                name="contactName"
                // placeholder="enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contactEmail">Email:</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={email}
                // placeholder="enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contactSubject">Subject:</label>
              <input
                type="text"
                // placeholder="enter your subject of email"
                value={subject}
                id="contactSubject"
                name="contactSubject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="textArea">
              <label htmlFor="contactMessage">Message: </label>
              <textarea
                cols="70"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="contactMessage"
                name="contactMessage"
              ></textarea>
            </div>
            <div className="submitButton">
              <label />
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="details">
            <h4>Contact Details</h4>
            <div className="address">
              <p>
                {contactName} {contactEmail}
              </p>
              <p>
                {street} <br />
                {city}, {state}, {zip}
              </p>
              <span>{phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
