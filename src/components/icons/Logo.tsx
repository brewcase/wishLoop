import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 32 },
    md: { width: 120, height: 38 },
    lg: { width: 160, height: 44 }
  };
  
  const { width, height } = sizes[size];
  
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="WishWell Logo"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </div>
  );
}
