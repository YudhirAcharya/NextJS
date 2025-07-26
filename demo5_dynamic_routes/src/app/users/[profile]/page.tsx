import { profile } from "console";
import React from "react";
interface Id {
  profile: string;
}
//“I’m writing a function called Profile. It receives an object that contains params.
// And params must be an object with a string property called profile.”
const Profile = ({ params }: { params: Id }) => {
  var user = " ";
  if (params.profile == "1") {
    user = "User 1";
  } else if (params.profile == "2") {
    user = "User 2";
  } else {
    user = params.profile;
  }
  return <div>Profile of {user}</div>;
};

export default Profile;
