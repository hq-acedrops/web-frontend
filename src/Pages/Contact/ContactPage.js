import { useState } from "react";

import classes from "./ContactPage.module.css";
// import Box from "@mui/material/Box";
// import Input from "@mui/material/Input";

const ContactPage = () => {
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    query: false,
  });

  const [formdata, setform] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setform({ ...formdata, [name]: value });
  };

  var data = "";

  const handleError = (formdata) => {
    Object.entries(formdata).forEach((field) => {
      const [name, value] = field;

      if (value === "") {
        setError({ ...error, [name]: true });
        console.log(error);
        return false;
      } else {
        data = "success";
        return true;
      }
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    handleError(formdata);
    if (data === "success") {
      const res = await fetch("https://api.acedrops.in/admin/sendContactMail", {
        method: "POST",
        body: JSON.stringify({
          name: formdata.name,
          email: formdata.email,
          phone: formdata.phone,
          query: formdata.query,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();

      if (result.message === "Received your query")
        setform({
          name: "",
          email: "",
          phone: "",
          query: "",
        });

      console.log(result);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.contactSection}>
        <div
          className={classes.form}
          // component="form"
          // sx={{
          //   "& > :not(style)": { m: 1, width: "400px" },
          // }}
          noValidate
          autoComplete="off"
        >
          <label>
            Name
            <input
              name="name"
              value={formdata?.name}
              className="nameVal inputVal"
              label="Your Name"
              placeholder="Your name"
              variant="outlined"
              required
              error={error?.name}
              helperText={error?.name && "Please enter your name."}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              value={formdata?.email}
              className="inputVal"
              label="Email"
              placeholder="abc@xyz.com"
              variant="outlined"
              required
              error={error?.email}
              helperText={error?.email && "Please enter your email."}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone
            <input
              name="phone"
              value={formdata?.phone}
              className="inputVal"
              placeholder="9825098250"
              label="Phone no."
              variant="outlined"
              required
              error={error?.phone}
              helperText={error?.phone && "Please enter your phone number."}
              onChange={handleChange}
            />
          </label>
          <label>
            Query
            <textarea
              name="query"
              value={formdata?.query}
              className="inputVal"
              id="filled-textarea"
              label="Query"
              placeholder="Type your query"
              multiline
              variant="filled"
              rows={4}
              required
              error={error?.query}
              helperText={error?.query && "Please enter your Query."}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <div className={classes.infoSection}>
        <h2 className={classes.heading}>Contact Us</h2>
        <div className={classes.details}>
          <p className={classes.para}>
            We are 24 hours ready to receive your queries Go ahead and contact
            our team today
          </p>
          <ul className={classes.list}>
            <h3>Reach us on our mail :</h3>
            <li>
              <a href="mailto:support@acedrops.in">
                <i class="fa-solid fa-envelope"></i>support@acedrops.in
              </a>
            </li>
            <li>
              <a href="tel:+916392970547">
                <i class="fa-solid fa-phone"></i>+91-63929 70547
              </a>
            </li>
            <li>
              <a href="tel:+919565973316">
                <i class="fa-solid fa-phone"></i>+91-95659 73316
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
