import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const AddMenu = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    type: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeSubmit = () => {
    const payload = {
      name: form?.name,
      description: form?.description,
      price: parseInt(form?.price),
      imageUrl: form?.imageUrl,
      type: form?.type,
    };
    try {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.post("https://api.mudoapi.tech/menu", payload, config);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <h1>Add Menu</h1>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="image url"
        name="imageUrl"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="type"
        name="type"
        onChange={handleChange}
      />

      <button onClick={handleChangeSubmit}>Add Menu</button>
    </div>
  );
};

export default AddMenu;
