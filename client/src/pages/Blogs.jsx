import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
export default function Blogs() {
  let [blog, setBlog] = useState({
    first_name: "",
    last_name: "",
    blood_type: "",
    condition: "",
    patient_details: "",
  });
  let [blogData, setBlogData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
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
    setBlog({
      first_name: "",
      last_name: "",
      blood_type: "",
      condition: "",
      patient_details: "",
    });
  }
  console.log(blog);
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
        `https://backendehr-production.up.railway.app/record/delete/${id}`,
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
      patient_details: selectedBlog.patient_details,
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
        `https://backendehr-production.up.railway.app/record/update/${id}`,
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
      <Button onClick={onOpen} m="1rem">
        Add Patient
      </Button>
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
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader m="auto">Add Patient Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input
                    ref={initialRef}
                    name="first_name"
                    placeholder="First name"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    onChange={handleChange}
                    name="last_name"
                    placeholder="Last name"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Blood Group</FormLabel>
                  <Input
                    onChange={handleChange}
                    placeholder="blood group"
                    name="blood_type"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Any Specific details</FormLabel>
                  <Input
                    onChange={handleChange}
                    placeholder="condition details..."
                    name="patient_details"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Condition of patient</FormLabel>
                  <Select
                    placeholder="Select option"
                    name="condition"
                    onChange={handleChange}
                  >
                    <option value="stable">stable</option>
                    <option value="intermediate">intermediate</option>
                    <option value="critical">critical</option>
                  </Select>
                </FormControl>
                <Button colorScheme="blue" mr={3} mt="1rem" type="submit">
                  Save
                </Button>
              </form>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "50vw",
            // padding: "10px",
            margin: "auto",
            padding: "1rem",
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
                    value={update.patient_details}
                    name="patient_details"
                    onChange={(e) =>
                      handleTextArea("patient_details", e.target.value)
                    }
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
              <li>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Patient Condition:{" "}
                </span>{" "}
                {item.condition}
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
