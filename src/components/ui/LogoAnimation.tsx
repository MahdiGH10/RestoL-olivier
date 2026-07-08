import { cn } from "../../lib/cn";

interface Props {
  className?: string;
  variant?: "hero" | "navbar";
}

export default function LogoAnimation({ className, variant = "navbar" }: Props) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={cn(
        "object-contain",
        variant === "navbar" && "h-9 md:h-10 w-auto",
        variant === "hero" && "w-full max-w-[320px]",
        className
      )}
    >
      <source src="/logololivieranimation.webm" type="video/webm" />
      <img src="/logo.jpg" alt="L'Olivier" className={cn(variant === "navbar" && "h-9 md:h-10 w-auto")} />
    </video>
  );
}
