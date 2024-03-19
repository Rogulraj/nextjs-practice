import Link from "next/link";
import React from "react";

function Notification() {
  return (
    <div
      style={{
        height: "60vh",
        width: "30vw",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#fff",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h2>Notification</h2>
      <Link href={"/dashboard/archive"}>
        <button
          type="button"
          style={{
            backgroundColor: "steelblue",
            height: "40px",
            width: "70px",
            borderStyle: "none",
            borderRadius: "10px",
            marginTop: "10px",
            cursor: "pointer",
          }}>
          Archive
        </button>
      </Link>
    </div>
  );
}

export default Notification;
