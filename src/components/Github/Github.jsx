import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Pankaj-prasad758")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="bg-orange-300 text-3xl text-black p-4 m-2 w-auto ">
        <h1>Github Name:{data.login}</h1>
        <img src={data.avatar_url} alt="git picture" width={250} className="m-4 rounded-full"/>
        <h2 className="bg-black text-white text-3xl">{data.type}</h2>
      </div>
    </>
  );
}

export default Github;

export const gethubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Pankaj-prasad758')
  return response.json()
  
}
