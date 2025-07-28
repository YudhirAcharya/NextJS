import React from "react";

const Random = async () => {
  await new Promise((reslove) =>
    setTimeout(() => {
      reslove("content Loading");
    }, 5000)
  );
  return <div>User page</div>;
};

export default Random;
