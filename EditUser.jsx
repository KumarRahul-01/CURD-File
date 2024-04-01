import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../Api/AxiosInstance";
import { endPoint } from "../../Api/EndPoint";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  //   console.log(id);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  // console.log(input);

  const { name, email } = input;

  const fetchUser = async () => {
    const { data } = await axiosInstance.get(`${endPoint.user}/${id}`);
    // console.log(data);
    return data;
  };

  useEffect(() => {
    fetchUser().then((res) => setInput(res));
  }, []);

  const updateUser = async (input) => {
    // console.log(input);
    return await axiosInstance.put(`${endPoint.user}/${id}`, input);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInput({
      name: "",
      email: "",
    });
    // console.log(input);
    await updateUser(input);
    navigate("/list");
  };

  return (
    <div className="container">
      <h1>Update User</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            value={name}
            onChange={handleChange}
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
