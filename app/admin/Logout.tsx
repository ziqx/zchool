"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import StyledButton from "@/components/common/StyledButton";
import Swal from "sweetalert2";

function Logout() {
  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    });
    if (confirm) {
      Cookies.remove("admin_token");
      window.location.replace("/admin");
    }
  };

  return (
    <>
      <button
        onClick={() => handleLogout()}
        className="group absolute bottom-0 w-full button p-5  bg-black hover:bg-red-900 text-white duration-300"
        aria-label="Logout"
      >
        <StyledButton text={"Log Out"} />
        <div className="arrow-wrapper">
          <div className="arrow bg-secondary/55"></div>
        </div>
      </button>
    </>
  );
}

export default Logout;
