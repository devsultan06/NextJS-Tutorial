export default function ProductDetails({
  params,
}: {
  params: { productid: string; reviewsId: string };
}) {
  return (
    <h1>
      Review {params.reviewsId} for Product {params.productid}
    </h1>
  );
}
