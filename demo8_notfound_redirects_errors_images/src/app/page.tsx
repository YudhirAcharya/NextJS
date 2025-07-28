import React from "react";
import Image1 from "/public/image.jpg";
import Image from "next/image";
const Home = () => {
  return (
    <div>
      Home
      <Image src={Image1} alt="" width={400} height={600}></Image>
      <Image
        src={
          "https://th.bing.com/th/id/R.c66378445741ee0e1780a08901f2fa98?rik=wdI403VFCY%2frUA&pid=ImgRaw&r=0"
        }
        alt=""
        width={400}
        height={600}
      ></Image>
    </div>
  );
};

export default Home;
