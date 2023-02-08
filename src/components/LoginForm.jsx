import React, { useState,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import LoadingScreen from "./LoadingScreen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../css/LoginFormcss.css'
import FTLifePartnerPlus_Logo from '../img/FTLifePartnerPlus_Logo.png';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkTokenLoading, setCheckTokenLoading] = useState(true);
  const [isRecord, setIsRecord] = useState(false);

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
          icon: 'error',
          title: "Error!",
          text: "Incorrect username or password",
          type: "error",
        });
        setIsError(true);
      } else {
        Cookies.set("PLUSID", response.data, { expires: 7 });
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          title: "Success!",
          text: "You are now logged in",
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
      const token = Cookies.get("PLUSID");
      if (token) {
        try {
          const response = await axios.post(
            "http://localhost:8080/protected",
            {},
            {
              headers: {
                Authorization: `plus ${token}`,
              },
            }
          );
          if (response.data === "success") {
            setIsRecord(true);
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
  
  if (isRecord) {
    window.location.href = "/home";
    return null;
  }
  
  if (isSuccess) {
    setTimeout(() => {
      window.location.href = "/home";
    }, 1500);
    return null;
  }
  return (
    <div className="login-bg d-flex align-items-center justify-content-center w-100">
      <form className=" ml-5 mr-5 login bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div data-container="" class="login-logo" text-align= "center">
        <div data-container="" text-align= "center">
          <img
              alt="FTLifePartnerPlus_Logo"
              src={FTLifePartnerPlus_Logo}
              height= "100px"
            />        
          </div>
        <h3 class="mb-4 w-100mt-2 text-center text-neutral-800	">
          <span class="heading5">Partner+ FTL </span>
          <span class="heading5">Admin</span>
        </h3>
      </div>
      <div className="mb-4">
      <label class="block mb-2 text-sm font-medium ">Username:</label>
        <input
          className="form-control "
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
      <label class="block mb-2 text-sm font-medium ">Password:</label>
        <input
          className="form-control "
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="mb-4 full-width">
        <button
        className="btn w-100 btn-primary"
        type="submit"
        disabled={isLoading}
        style={{
          backgroundColor: isLoading ? "lightgray" : isSuccess ? "green" : "",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {isLoading ? "Loading..." : isSuccess ? <FontAwesomeIcon icon={faCheck} />  : "Submit"}
      </button>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;

