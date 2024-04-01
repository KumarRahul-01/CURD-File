import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Api/AxiosInstance";
import { endPoint } from "../../Api/EndPoint";

const UserResgister = () => {
  const navigate=useNavigate();
  const [input, setInput] = useState({ name: "", email: "" });
  const { name, email } = input;

  const addUser = async (input) => {
    return await axiosInstance.post(`${endPoint.user}`, input);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      name: "",
      email: "",
    });

    // console.log(input);
    addUser(input);
    navigate("/list");
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChange}
            id="exampleInputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserResgister;
