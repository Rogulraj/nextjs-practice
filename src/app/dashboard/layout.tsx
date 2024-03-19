import React from "react";

type PropsType = {
  children: React.ReactNode;
  userList: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
};

export default function DashBoardLayout(props: PropsType) {
  const { children, notification, revenue, userList, login } = props;

  const isLogin = true;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "20px",
      }}>
      {children}
      {isLogin ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}>
            {userList}
            {revenue}
          </div>
          <div>{notification}</div>
        </div>
      ) : (
        <>{login}</>
      )}
    </div>
  );
}
