import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  console.warn("data", data);
  return (
    <section>
      {data.map((foundData) => (
        <div key={foundData.id}>
          <strong>{foundData.title}</strong>
        </div>
      ))}
    </section>
  );
};

export default Home;
