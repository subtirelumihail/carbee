"use client";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

const Home: FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default Home;
