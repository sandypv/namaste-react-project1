import { useState, useRef } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailPattern = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // const pwd = useRef();

  //trim() is used ,to remove any spaces the user enters

  //   function handleSubmit() {
  //     if (email.trim() === "") {
  //       setErrors({ ...errors, email: "enter an email id" });
  //     } else {
  //       setErrors({ ...errors, email: "" });
  //     }
  //   }

  //In useState having object as input, we cannot update the set property directly, as it gives error..instead we have
  function handleSubmit() {
    if (email.trim() === "") {
      setErrors((errors) => ({ ...errors, email: "enter an email" }));
    } // .test()--is used to test the pattern in reg exp.
    else if (!emailPattern.test(email)) {
      setErrors((errors) => ({ ...errors, email: "enter valid email" }));
    } else {
      setErrors((errors) => ({ ...errors, email: "" }));
    }
    if (password.trim() === "") {
      setErrors((errors) => ({ ...errors, password: "enter a password" }));
    } else if (password.trim().length < 8) {
      setErrors((errors) => ({
        ...errors,
        password: "password is minimum 8 characters",
      }));
    } else {
      setErrors((errors) => ({ ...errors, password: "" }));
    }
  }
  return (
    <>
      <div className="loginPage">
        <h2 className="loginHeading"> Login Page</h2>

        <div className="inputDiv">
          {/* <label>Email: </label>
          <br /> */}
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            value={email}
            placeholder="Enter email id"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="span-emailError">{errors.email}</span>
          )}
        </div>
        <br />

        <div className="pwdDiv">
          <label>Password: </label>
          <br />
          <input
            className="form-control"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="span-passwordError">{errors.password}</span>
          )}
        </div>
        <div>
          <button className="loginSubmit" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
