import { Anchor } from "@mantine/core";
import React from "react";

const RouteLinks = () => {
  const routes = [
    {
      path: "/dashboard",
      label: "Dashboard",
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <Anchor key={route.path} href={route.path}>
          {route.label}
        </Anchor>
      ))}
    </>
  );
};

export default RouteLinks;
