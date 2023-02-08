import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import PlusNavbar from '../components/Navbar';
import LoadingScreen from '../components/LoadingScreen';
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get("PLUSID");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    } else {
      fetch('http://localhost:8080/token', {
        method: 'POST',
        headers: {
          'Authorization': `plus ${token}`,
        }
      })
        .then(response => response.json())
        .then(data => {
          setUsername(data.username);
          setIsLoading(false);
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [token]);

  return (
    <>
      { isLoading ? <LoadingScreen /> : 
        <>
          <PlusNavbar />
          <h1>Current User: {username}</h1>
        </>
      }
    </>
  );
}

export default Home;