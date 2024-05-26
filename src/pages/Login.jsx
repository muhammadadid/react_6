import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    console.log(e);
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    console.log(e);
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const payload = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://api.mudoapi.tech/login",
        payload
      );
      setToken(response.data.data.token);
      console.log(response);
      const token = response.data.data.token;
      localStorage.setItem("access_token", token);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setErrorLogin(error.response.data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <h1>ini Login</h1>
      <div>
        <input
          onChange={handleChangeUsername}
          placeholder="masukkan username"
        />
        <input
          onChange={handleChangePassword}
          placeholder="masukkan password"
        />
        <button onClick={handleLogin}>Login</button>
        {token && <p>Login Berhasil</p>}
        {errorLogin && <p>{errorLogin}</p>}
      </div>
    </div>
  );
};

export default Login;
