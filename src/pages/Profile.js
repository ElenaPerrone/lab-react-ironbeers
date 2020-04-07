import React from "react";
import { getUser } from "../utils/auth";

const Profile = () => {
  let user = getUser()
  return (
    <div>
      <h1>Hello, {user.username} </h1>
    </div>
  )
}

export default Profile;
