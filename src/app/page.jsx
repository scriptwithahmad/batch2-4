import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="p-4">
        <h2 className="text-5xl text-center">Welcome</h2>
      </div>

      <div className="flex justify-between">

        <img width={300} className="rounded-lg" src="https://blog.logrocket.com/wp-content/uploads/2024/08/mastering-promise-cancellation-javascript.png" alt="image here" />
        <img width={300} className="rounded-lg" src="/images/image.png" alt="" />

      </div>

    </>
  );
}
