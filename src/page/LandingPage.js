import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import CMSNavbar from "../components/CMSNavbar";
import LoadingScreen from "../components/LoadingScreen";
import "bootstrap/dist/css/bootstrap.css";

function LandingPage() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get("PLUSID");

  useEffect(() => {
    if (false) {
      window.location.href = "/login";
    } else {
      fetch("http://localhost:8080/token", {
        method: "POST",
        headers: {
          Authorization: `plus ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsername(data.username);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [token]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <CMSNavbar />
          <h1>Current User: {username}</h1>
        </>
      )}
    </>
  );
}

export default LandingPage;
