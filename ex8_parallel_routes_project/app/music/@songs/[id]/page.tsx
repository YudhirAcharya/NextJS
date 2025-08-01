import React from "react";

interface Info {
  id: string;
}
const Song1 = ({ params }: { params: Info }) => {
  return <div>{params.id}</div>;
};

export default Song1;
