import React from "react";
import "./UserComponent.css";

const AvatarUser = () => {
  return (
    <div className="avatarImg">
      <img
        style={{
          width: "250px",
          height: "250px",
          margin: "0%",
          padding: "0%",
          borderRadius: "50%",
        }}
        src="https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_960_720.png"
      />
    </div>
  );
};

export default AvatarUser;
