"use client"
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");



function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    setEmail(e.target.value);
    setMobile(e.target.value);
    setPass(e.target.value);
    setCpass(e.target.value);
}


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(name =="") return alert("name is required")
    console.log("name", name);
    console.log("email", email);
    console.log("mobile", mobile);
    console.log("pass", pass);
    console.log("pass", cpass);
  }

  return (
    <div>
      <center>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            placeholder="name"
            className="border border-black"
            id=""
            // onChange={(e) => setName(e.target.value)}
            onChange={handleInput}
          />{" "}
          <br />
          <input
            type="text"
            name=""
            placeholder="email"
            className="border border-black"
            id=""
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleInput}
          />
          <br />
          <input
            type="text"
            name=""
            placeholder="mobile"
            className="border border-black"
            id=""
            // onChange={(e) => setMobile(e.target.value)}
            onChange={handleInput}
          />
          <br />
          <input
            type="text"
            name=""
            placeholder="password"
            className="border border-black"
            id=""
            // onChange={(e) => setPass(e.target.value)}
            onChange={handleInput}
          />
          <br />
          <input
            type="text"
            name=""
            placeholder="confirm password"
            className="border border-black"
            id=""
            // onChange={(e) => setPass(e.target.value)}
            onChange={handleInput}
          />
          <br />
          <button>submit</button>
        </form>
      </center>
    </div>
  );
}

export default Form;
