import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import FTLifePartnerPlus_Logo from "../img/FTLifePartnerPlus_Logo.png";
import "../css/Navbarcss.css";
import { useLocation } from 'react-router-dom';

const PlusNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleMouseEnter() {
    setIsOpen(true);
  }

  function handleMouseLeave() {
    setIsOpen(false);
  }
  return (
    <div>
      <nav className="shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 pointer"
                  src={FTLifePartnerPlus_Logo}
                  alt="Workflow"
                  onClick={() => {window.location = "/home";}}
                  
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                <div style={{ position: 'relative', display: 'inline-block' }}>

                  <Dropdown       onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                      show={isOpen}>
                    <Dropdown.Toggle onMouseEnter={handleToggle}
                    
                    id={location.pathname === "/BrokerCom"
                      ?  "dropdown-basic " 
                      : "dropdown-basic-unactive" }
                      className=""
                      >
                        CMS
                        </Dropdown.Toggle>
                        
                    <Dropdown.Menu show style={{ marginTop: "-0.5rem" }}>
                      <Dropdown.Item href="/BrokerCom" className={location.pathname === "/BrokerCom" ?"active": "inactive" }>
                        Brokers Communications
                      </Dropdown.Item>
                      <Dropdown.Item href="/Categories" className={location.pathname === "/Categories" ?"active": "inactive" }>Categories</Dropdown.Item>
                      <Dropdown.Item href="/EventCalendar" className={location.pathname === "/EventCalendar" ?"active": "inactive" }>Event Calendar</Dropdown.Item>
                      <Dropdown.Item href="/QuickLinks" className={location.pathname === "/QuickLinks" ?"active": "inactive" }>Quick Links</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </div>

                  <a className="m-16 relative group " href="/Campaign">
                    <span className={location.pathname === "/Campaign"
                      ?  "text-orange hover:text-orange " 
                      : "text-gray-900  " }>Campaign</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-orange transition-all group-hover:w-full"> </span>
                  </a>
                  <a className="m-16 relative group " href="/DocCenter">
                    <span className={location.pathname === "/DocCenter"
                      ?  "text-orange hover:text-orange " 
                      : "text-gray-900  " }>Document Center</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-orange transition-all group-hover:w-full">
                     </span>
                  </a>
                  </div>
                

              </div>

            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-orange inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Dropdown>
                    <Dropdown.Toggle 
                    
                    id={location.pathname === "/BrokerCom"
                      ?  "dropdown-basic " 
                      : "dropdown-basic-unactive" }
                      >
                        CMS
                        </Dropdown.Toggle>
                        
                    <Dropdown.Menu>
                      <Dropdown.Item href="/BrokerCom" className={location.pathname === "/BrokerCom" ?"active": "inactive" }>
                        Brokers Communications
                      </Dropdown.Item>
                      <Dropdown.Item href="/Categories" className={location.pathname === "/Categories" ?"active": "inactive" }>Categories</Dropdown.Item>
                      <Dropdown.Item href="/EventCalendar" className={location.pathname === "/EventCalendar" ?"active": "inactive" }>Event Calendar</Dropdown.Item>
                      <Dropdown.Item href="/QuickLinks" className={location.pathname === "/QuickLinks" ?"active": "inactive" }>Quick Links</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                <a
                  href="/home"
                  className="text-orange hover:bg-orange hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="/home"
                  className="text-orange hover:bg-orange hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Campagin
                </a>

                <a
                  href="/home"
                  className="text-orange hover:bg-orange hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Documnet Center
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default PlusNavbar;
