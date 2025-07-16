import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import type React from "react";

export function ExternalLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="external-link"
      className={cn(
        "text-primary flex w-fit items-center justify-center gap-2.5 text-sm font-medium transition-opacity hover:opacity-70",
        className,
      )}
      {...props}
    >
      {children}
      <ExternalLinkIcon className="size-4" />
    </Link>
  );
}
