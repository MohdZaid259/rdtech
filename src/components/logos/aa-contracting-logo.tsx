import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function AAContractingLogo({
  size = 100,
}: { readonly size?: number } = {}) {
  return (
    <div>
      <SafeImage
        src="/Logos/aa-contracting-logo.png?updatedAt=1755860934774"
        alt="AA Contracting Logo"
        width={size}
        height={size}
      />
    </div>
  );
}
