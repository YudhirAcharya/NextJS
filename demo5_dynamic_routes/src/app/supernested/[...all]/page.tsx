import React from "react";
interface All {
  all: string[];
  //string array to capture all dynamic segments
}

// params: { all: string[] }
// You're destructuring the params object passed to the component and saying it looks like this:
// { all: ["something", "somethingElse", ...] }
const Project = async ({ params }: { params: All }) => {
  const { all } = params;
  //“Take the all property out of the params object and create a variable named all that holds its value.”

  //   const { all } = params;
  // Is the same as writing:
  // const all = params.all;

  console.log("..........", all);

  return <div>Project : {all.join(", ")}</div>;
};

export default Project;
