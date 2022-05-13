import React from "react";
import { Outlet } from "react-router-dom";

export default function DevLog() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">DevLog page</h1>
        <div className="body-cont">
          <p>test flag code</p>
          <Outlet />

        </div>
      </div>
    </div>
  );
};