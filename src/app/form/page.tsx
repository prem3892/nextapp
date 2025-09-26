"use client";
import React, { useState } from "react";

function Form() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [pass, setPass] = useState("");
  // const [cpass, setCpass] = useState("");
  // function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
  //     setName(e.target.value);
  //     setEmail(e.target.value);
  //     setMobile(e.target.value);
  //     setPass(e.target.value);
  //     setCpass(e.target.value);
  // }

  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    pass: "",
    cpass: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.name == "") return alert("name is required");
    console.log("name", input.name);
    console.log("email", input.email);
    console.log("mobile", input.mobile);
    console.log("pass", input.pass);
    console.log("pass", input.cpass);
    setInput({ name: "", email: "", mobile: "", pass: "", cpass: "" });
  }

  return (
    <div>
      <center>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="border border-black"
            id=""
            value={input.name}
            // onChange={(e) => setName(e.target.value)}
            // onChange={handleInput}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            className="border border-black"
            id=""
            value={input.email}
            // onChange={(e) => setEmail(e.target.value)}
            // onChange={handleInput}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="mobile"
            placeholder="mobile"
            className="border border-black"
            id=""
            value={input.mobile}
            // onChange={(e) => setMobile(e.target.value)}
            // onChange={handleInput}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="pass"
            placeholder="password"
            className="border border-black"
            id=""
            value={input.pass}
            // onChange={(e) => setPass(e.target.value)}
            // onChange={handleInput}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="cpass"
            placeholder="confirm password"
            className="border border-black"
            id=""
            value={input.cpass}
            // onChange={(e) => setPass(e.target.value)}
            // onChange={handleInput}
            onChange={handleChange}
          />
          <br />
          <button>submit</button>
        </form>
      </center>
    </div>
  );
}

export default Form;
