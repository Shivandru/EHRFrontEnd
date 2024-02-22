import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
export default function Blogs() {
  let [blog, setBlog] = useState({ title: "", body: "" });
  let [blogData, setBlogData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState({});
  async function handleSubmit(event) {
    event.preventDefault();
    let res = await fetch(
      `https://backendehr-production.up.railway.app/record/add`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(blog),
      }
    );
    let data = await res.json();
    alert(data.msg);
    console.log(data.msg);
    setBlog({ title: "", body: "" });
  }

  function handleChange(event) {
    setBlog({
      ...blog,
      [event.target.name]: event.target.value,
    });
  }
  async function getBlogs() {
    let res = await fetch(
      `https://backendehr-production.up.railway.app/record`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    );
    let data = await res.json();
    setBlogData(data.data);
  }

  useEffect(() => {
    getBlogs();
  }, []);

  async function handleDelete(id) {
    try {
      let res = await fetch(
        `https://tiny-pink-eagle-cape.cyclic.app/blog/delete/${id}`,
        {
          method: "DELETE",
          mode: "cors",
          credentials: "include",
        }
      );
      let data = await res.json();
      alert(data.msg);
    } catch (error) {
      console.log(error);
    }
  }

  function handleToggle(id) {
    setSelectedId(id);
    setEdit(!edit);
    let selectedBlog = blogData.find((item) => item._id === id);
    setUpdate((prevValue) => ({
      ...prevValue,
      title: selectedBlog.title,
      body: selectedBlog.body,
    }));
  }

  const handleTextArea = (name, value) => {
    setUpdate((prevUpdate) => ({
      ...prevUpdate,
      [name]: value,
    }));
  };
  async function handleUpdate(id) {
    try {
      console.log(update);
      let res = await fetch(
        `https://tiny-pink-eagle-cape.cyclic.app/blog/update/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify(update),
        }
      );
      let data = await res.json();
      alert(data.msg);
      setEdit(!edit);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginTop: "10vh",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        RECORDS
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "35vw",
            height: "30rem",
            border: "1px solid black",
            padding: "2rem",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              style={{
                margin: "10px",
                height: "5vh",
                width: "30vw",
                textAlign: "center",
              }}
              placeholder="Enter name"
              type="text"
              name="title"
              onChange={handleChange}
            />
            <br />
            <input
              style={{
                margin: "10px",
                height: "30vh",
                width: "30vw",
                textAlign: "center",
              }}
              placeholder="Enter details"
              type="text"
              name="body"
              onChange={handleChange}
            />
            <br />
            <input
              style={{
                margin: "10px",
                padding: "10px",
                width: "30vw",
                cursor: "pointer",
              }}
              type="submit"
            />
          </form>
        </div>
        <div
          style={{
            width: "50vw",
            padding: "10px",
          }}
        >
          {blogData?.map((item) => (
            <div
              style={{
                marginTop: "10px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "2rem",
              }}
              key={item._id}
            >
              {edit && selectedId === item._id ? (
                <div>
                  <textarea
                    style={{ height: "2vh" }}
                    value={update.title}
                    name="title"
                    onChange={(e) => handleTextArea("title", e.target.value)}
                  ></textarea>
                  <br />
                  <textarea
                    value={update.body}
                    name="body"
                    onChange={(e) => handleTextArea("body", e.target.value)}
                  ></textarea>
                  <br />
                  <Button
                    cursor={"pointer"}
                    onClick={() => handleUpdate(item._id)}
                  >
                    SAVE
                  </Button>
                </div>
              ) : (
                <div>
                  <li>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                      Patient Name:{" "}
                    </span>
                    {item.first_name} {item.last_name}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                      Patient Details:{" "}
                    </span>
                    {item.patient_details}
                  </li>
                </div>
              )}
              <li>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Blood Group:{" "}
                </span>{" "}
                {item.blood_type}
              </li>

              <Button
                cursor={"pointer"}
                onClick={() => {
                  handleToggle(item._id);
                }}
                style={{ cursor: "pointer" }}
              >
                {edit && selectedId === item._id ? "BACK" : "EDIT"}
              </Button>

              <Button
                cursor={"pointer"}
                onClick={() => {
                  handleDelete(item._id);
                }}
                style={{ marginLeft: "10px", cursor: "pointer" }}
              >
                DELETE
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
