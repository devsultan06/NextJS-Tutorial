"use client";
import { useRouter } from "next/router";
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>Order Product Page</h1>
      <button onClick={handleClick}>Order Product</button>
    </>
  );
}
