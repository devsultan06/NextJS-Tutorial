"use client";
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewsDetails({
  params,
}: {
  params: { productid: string; reviewsId: string };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Review not found");
  }

  return (
    <h1>
      Review {params.reviewsId} for Product {params.productid}
    </h1>
  );
}
