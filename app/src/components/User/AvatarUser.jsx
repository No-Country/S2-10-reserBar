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
        src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/11/23/5fbb9aab2a39d.jpeg"
      />
    </div>
  );
};

export default AvatarUser;
