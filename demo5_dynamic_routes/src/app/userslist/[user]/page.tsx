import React from "react";

//destructure params from the props
//params will contain the dynamic route parameter 'user'
//in this case, it will be the user name
//e.g., if the URL is /users/john, params will be { user: "john" }

const User = async ({ params }: { params: { user: string } }) => {
  //access the user parameter from params
  //you can use this parameter to fetch user-specific data or display user information
  const { user } = await params;
  console.log(user);
  return <div>User: {user}</div>;
};

export default User;
