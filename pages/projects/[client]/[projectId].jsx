import React from "react";
import { useRouter } from "next/router";

const Project = () => {
  const query = useRouter().query;
  console.log(query);
  return (
    <div>
      {" "}
      Client: {query.client} | Project: {query.projectId}
    </div>
  );
};

export default Project;
