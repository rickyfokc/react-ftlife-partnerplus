import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import FTLifePartnerPlus_Logo from "../img/FTLifePartnerPlus_Logo.png";
import "../css/Navbarcss.css";

const CMSNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 "
                  src={FTLifePartnerPlus_Logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">CMS</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/home">
                        Brokers Communications
                      </Dropdown.Item>
                      <Dropdown.Item href="/home">Categories</Dropdown.Item>
                      <Dropdown.Item href="/home">Event Calendar</Dropdown.Item>
                      <Dropdown.Item href="/home">Quick Links</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <a href="/Campaign">
                    <p className="relative group">
                      <span className="text-orange px-2 py-2 rounded-md text-sm font-medium">
                        Campaign
                      </span>
                      <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-orange transition-all group-hover:w-full"></span>
                    </p>
                  </a>
                  <a
                    href="/Campaign"
                    className=" hover:bg-orange hover:text-white text-gray-600 px-2 py-2 rounded-md text-sm font-medium"
                  >
                    Campaign
                  </a>

                  <a
                    href="/home"
                    className=" hover:bg-orange hover:text-white text-gray-600 px-2 py-2 rounded-md text-sm font-medium"
                  >
                    Document Center
                  </a>
                  <p className="m-16 relative group">
                    <span>Hover over me</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
                  </p>
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
                  <Dropdown.Toggle id="dropdown-basic">CMS</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/home">
                      Brokers Communications
                    </Dropdown.Item>
                    <Dropdown.Item href="/home">Categories</Dropdown.Item>
                    <Dropdown.Item href="/home">Event Calendar</Dropdown.Item>
                    <Dropdown.Item href="/home">Quick Links</Dropdown.Item>
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

export default CMSNavbar;
