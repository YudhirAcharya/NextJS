import React from "react";
interface Info {
  slug: string[];
}
const DynamicPage = ({ params }: { params: Info }) => {
  console.log("DynamicPage params:", params);
  return (
    <div>
      DynamicPage List of nested routes with dynamic URL:
      {params.slug.map((slug) => (
        <div key={slug}>{slug}</div>
      ))}
    </div>
  );
};

export default DynamicPage;
