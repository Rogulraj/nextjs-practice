import Link from "next/link";
import React from "react";

function ArchiveNotification() {
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
      <h2>ArchiveNotification</h2>
      <Link href={"/dashboard"}>
        <button
          type="button"
          style={{
            backgroundColor: "steelblue",
            height: "40px",
            width: "90px",
            borderStyle: "none",
            borderRadius: "10px",
            marginTop: "10px",
            cursor: "pointer",
          }}>
          dashboard
        </button>
      </Link>
    </div>
  );
}

export default ArchiveNotification;
