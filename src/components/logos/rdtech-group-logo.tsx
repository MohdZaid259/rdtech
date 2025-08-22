import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function RDTechGroupLogo({
  iconSize = 50,
  textSize = 50,
  className = "",
}: {
  readonly iconSize?: number;
  readonly textSize?: number;
  readonly className?: string;
} = {}) {
  return (
    <div className="flex items-center gap-1">
      <SafeImage
        src="/Logos/rdtech-group-1.png?updatedAt=1755860934739"
        alt="RDTech Group Logo"
        width={iconSize}
        height={iconSize}
        className="text-shadow-lg"
      />
      <SafeImage
        src="/Logos/rdtech-group-2.png?updatedAt=1755860934693"
        alt="RDTech Group Text Logo"
        width={textSize}
        height={textSize}
        className={`brightness-0 text-shadow-lg ${className}`}
      />
    </div>
  );
}
