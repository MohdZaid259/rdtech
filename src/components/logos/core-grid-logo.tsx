import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function CoreGridLogo({
  size = 100,
}: { readonly size?: number } = {}) {
  return (
    <div>
      <SafeImage
        src="/Logos/core-grid-logo.png?updatedAt=1755860934559"
        alt="CoreGrid Logo"
        width={size}
        height={size}
      />
    </div>
  );
}
