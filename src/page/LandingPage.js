import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import PlusNavbar from "../components/PlusNavbar";
import LoadingScreen from "../components/LoadingScreen";
import "bootstrap/dist/css/bootstrap.css";

function LandingPage() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get("PLUSID");

  useEffect(() => {
    if (!token) {
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
          <PlusNavbar username={username} />
          <div class=" border-gray-900 border-2 p-3 md:space-x-2 md:flex md:flex-row ">
            <div class=" md:p-4 md:border-green-500 space-y-2 md:border-2 md:h-auto md:w-3/4 md:flex md:flex-col ">
              <div class=" md:p-4 md:border-pink-500 md:border-2 md:h-screen md:flex md:flex-col space-y-2">
                <div class="p-3 border-purple-500 border-2 h-96 md:h-3/5">
                  Broker Communication
                </div>
                <div class="p-3 border-purple-500 border-2 h-96 md:h-2/5">
                  Latest Promo
                </div>
              </div>
              <div class=" md:p-4 md:border-yellow-300 md:border-2 md:h-screen md:flex md:flex-row md:space-x-2 ">
                <div class="p-3 border-purple-500 border-2 md:w-1/2 md:h-full h-96">
                  Event Calendar
                </div>
                <div class="p-3 border-purple-500 border-2 md:w-1/2 md:h-full h-96">
                  Qucik Links
                </div>
              </div>
            </div>
            <div class=" md:p-4 md:border-blue-500 md:border-2 md:h-full md:w-1/4 md:flex md:flex-col md:items-center space-y-2">
              <div class="border-purple-500 border-2 w-full h-36 md:h-72 p-4">
                Policy Inquiry
              </div>
              <div class="border-purple-500 border-2 w-full h-96 md:h-screen p-4">
                Document Centre
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LandingPage;
