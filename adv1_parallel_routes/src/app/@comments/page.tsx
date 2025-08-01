import React from "react";
import Link from "next/link";
const Comments = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("currently loading");
    }, 4000);
  });

  return (
    <div className="border p-[10rem] w-[30rem]">
      Comments
      <Link href={`/salary`}>Salary</Link>
    </div>
  );
};

export default Comments;
