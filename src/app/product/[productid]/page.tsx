export default function ProductDetails({
  params,
}: {
  params: { productid: string };
}) {
  return <h1>Product Details Page {params.productid}</h1>;
}
