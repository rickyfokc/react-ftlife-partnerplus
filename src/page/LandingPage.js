import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import PlusNavbar from "../components/PlusNavbar";
import LoadingScreen from "../components/LoadingScreen";
import "bootstrap/dist/css/bootstrap.css";
import "../css/LandingPagecss.css"


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
          <div class="p-3 md:space-x-2 md:flex md:flex-row ">
            <div className="space-y-2 md:h-auto md:w-3/4 md:flex md:flex-col ">
              <div className="md:h-screen md:flex md:flex-col space-y-2">
                <div className="h-96 md:h-3/5 relative flex justify-center">
                  <div className="test h-16 absolute ">
                    <span class="bold h4 text-white">Brokers Communications</span>
                  </div>
                  <div className=" rounded shadow-lg w-full mt-3 ">
                  </div>
                </div>
                <div class="h-96 md:h-2/5 relative flex justify-center">
                <div className="test h-16 absolute ">
                    <span class="bold h4 text-white">Latest Promo</span>
                  </div>
                  <div className=" rounded shadow-lg w-full mt-3 ">
                  </div>

                </div>
              </div>
              <div class="md:h-screen md:flex md:flex-row md:space-x-2 ">
                <div class="md:w-1/2 md:h-full h-96 relative flex justify-center">
                <div className="test h-16 absolute ">
                    <span class="bold h4 text-white">Event Calendar</span>
                  </div>
                  <div className=" rounded shadow-lg w-full mt-3 ">
                  </div>
                </div>
                <div class="md:w-1/2 md:h-full h-96 relative flex justify-center">
                  <div className="test h-16 absolute ">
                    <span class="bold h4 text-white">Qucik Links</span>
                  </div>
                  <div className=" rounded shadow-lg w-full mt-3 ">
                  </div>
                </div>
              </div>
            </div>
            <div class="md:h-full md:w-1/4 md:flex md:flex-col md:items-center space-y-2">
              <div class="w-full h-36 md:h-72 relative flex justify-center">
                  <div className="test h-16 absolute ">
                    <span class="bold h4 text-white">Policy Inquiry</span>
                  </div>
                  <div className=" rounded shadow-lg w-full mt-3 ">
                      
                  
                  </div>
                </div>
              <div class="w-full h-96 md:h-screen relative flex justify-center">
                <div className="test h-16 absolute ">
                    <span class="bold h4 text-white">Document Centre</span>
                  </div>
                  <div className=" rounded shadow-lg w-full mt-3 ">
                      
                  
                  </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LandingPage;
