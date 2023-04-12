import React, { memo } from "react";

const Profile = memo(function({ message }) {
  console.log("Profile render");
  return (
    <div>
      <h2>
        {message}
      </h2>
    </div>
  );
});

export default Profile;
