import React from "react";
import Link from "next/link";
const Products = () => {
  return (
    <div>
      Products:
      <Link href="/products/allproducts" className="b">
        <h2 className="text-xl font-semibold text-teal-800 mb-2">
          All products
        </h2>
      </Link>
      <Link href="/products/specificproduct" className="b">
        <h2 className="text-xl font-semibold text-teal-800 mb-2">
          Specific products
        </h2>
      </Link>
    </div>
  );
};

export default Products;
