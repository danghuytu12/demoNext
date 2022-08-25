/* eslint-disable @next/next/no-typos */
import Image from "next/image";
import React from "react";
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://62e9e38d3a5f1572e87056f4.mockapi.io/api/users"
  );
  const data = await res.json();
  const paths = data.map((user: any) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const res = await fetch(
    "https://62e9e38d3a5f1572e87056f4.mockapi.io/api/users/" + id
  );
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
};
const Detail = ({ user }: { user: any }) => {
  console.log("user", user);

  return (
    <>
      <h1 className="flex justify-center font-bold text-4xl mt-5">
        Detail Page
      </h1>
      <div className="flex justify-center mt-5">
        <Image
          src={user.image}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <h2 className="flex justify-center my-2">
        Name Details: <span className="text-red-500 mx-2">{user.name}</span>
      </h2>
    </>
  );
};

export default Detail;
