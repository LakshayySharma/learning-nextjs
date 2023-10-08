import { useRouter } from "next/router";
import React from "react";

const AllProjects = () => {
  const query = useRouter().query;
  return <div>All projects of client {query.client}</div>;
};

export default AllProjects;
