import { notFound } from "next/navigation";
export default function ProductDetails({
  params,
}: {
  params: { productid: string };
}) {
  if (parseInt(params.productid) > 1000) {
    notFound();
  }

  return <h1>Product Details Page {params.productid}</h1>;
}
