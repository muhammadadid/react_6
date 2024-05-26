import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [menus, setMenus] = useState([]);
  const getMenus = () => {
    axios
      .get("https://api.mudoapi.tech/menus?perPage=20")
      .then((res) => {
        console.log(res?.data?.data.Data);
        const response = res?.data?.data.Data;
        setMenus(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMenus();
  }, []);
  return (
    <div>
      <Navbar />
      <h1>list</h1>
      <Link to={"/menu/add"}>Add Menu</Link>
      {menus?.map((menu) => (
        <Link
          to={`/menu/${menu?.id}`}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "230px",
            backgroundColor: "pink",
          }}
        >
          <h1>{menu?.name}</h1>
          <p style={{ fontSize: "25px" }}>price : {menu?.price}</p>
          <img style={{ width: "200px" }} src={menu?.imageUrl} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default Home;
