import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../Api/AxiosInstance";
import { endPoint } from "../../Api/EndPoint";
import { Link } from "react-router-dom";

const UserList = () => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const { data } = await axiosInstance.get(`${endPoint.user}`);
    // console.log(data);
    return data;
  };

  const deleteUser = async (id) => {
    await axiosInstance.delete(`${endPoint.user}/${id}`);
    const updatedUsers = await fetchUser();
    setUser(updatedUsers);
  };

  useEffect(() => {
    fetchUser().then((res) => setUser(res));
  }, []);

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data, i) => {
            // console.log("hello");
            // console.log(data);
            return (
              <tr key={data.id}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(data.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-warning"
                    style={{ margin: "10px" }}
                    to={`/edit/${data.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
