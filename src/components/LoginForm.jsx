import React, { useState,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import LoadingScreen from "./LoadingScreen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkTokenLoading, setCheckTokenLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      if (response.data === "No") {
        Swal.fire({
          title: "Error!",
          text: "Incorrect username or password",
          type: "error",
        });
        setIsError(true);
      } else {
        Cookies.set("token", response.data, { expires: 7 });
        Swal.fire({
          title: "Success!",
          text: "You are now logged in",
          type: "success",
        });
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      setCheckTokenLoading(true);
      const token = Cookies.get("token");
      if (token) {
        try {
          const response = await axios.post(
            "http://localhost:8080/protected",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data === "success") {
            setIsSuccess(true);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setCheckTokenLoading(false);
        }
      } else {
        setCheckTokenLoading(false);
      }
    };
    checkToken();
  }, []);

  if (checkTokenLoading) {
    return <div><LoadingScreen /></div>;
  }

  if (isSuccess) {
    window.location.href = "/home";
    return null;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
        type="submit"
        disabled={isLoading}
        style={{
          backgroundColor: isLoading ? "lightgray" : isSuccess ? "green" : "",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {isLoading ? "Loading..." : isSuccess ? <FontAwesomeIcon icon={faCheck} />  : "Submit"}
      </button>
      </form>
    </div>
  );
};

export default LoginForm;