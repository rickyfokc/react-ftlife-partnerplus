import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import LoginNavbar from '../components/LoginNavbar';
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);

  return (
    <>
      <LoginNavbar />
      <h1>OKKKK</h1>
    </>
  )
}

export default Home