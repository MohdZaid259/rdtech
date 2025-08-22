import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function RDTechLogo({
  size = 100,
}: { readonly size?: number } = {}) {
  return (
    <div>
      <SafeImage
        src="/Logos/rdtech-logo.png?updatedAt=1755860934597"
        alt="RDTech Logo"
        width={size}
        height={size}
      />
    </div>
  );
}
