import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailMenu = () => {
  const [menus, setMenus] = useState([]);
  const param = useParams();
  console.log(param?.id);
  const navigate = useNavigate();

  const getDetailMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.id}`)
      .then((res) => {
        console.log(res?.data?.data);
        const response = res?.data?.data;
        setMenus(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    try {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = axios.delete(
        `https://api.mudoapi.tech/menu/${param?.id}`,
        config
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailMenu();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "500px",
        backgroundColor: "pink",
      }}
    >
      <h1>Detail Menu</h1>
      <h1>{menus?.name}</h1>
      <p>{menus?.description}</p>
      <p>Price : {menus?.price}</p>
      <p>{menus?.type}</p>
      <img
        style={{ width: "300px", height: "300px" }}
        src={menus?.imageUrl}
        alt=""
      />
      <button onClick={handleDelete}>Delet</button>
    </div>
  );
};
export default DetailMenu;
