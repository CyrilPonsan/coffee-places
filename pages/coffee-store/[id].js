import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);

  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default CoffeeStore;
